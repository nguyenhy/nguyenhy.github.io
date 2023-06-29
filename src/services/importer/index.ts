import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../storage/index.services";

interface ILocalChunkItem<T> {
  data: T;
  date: number;
  version: number;
}

/**
 * version of `ILocalChunkItem`
 * - if the change required data to be newly refreshed
 *  then we have to force all
 */
const VERSION = 1;

export async function importer<T>(
  chunk: () => Promise<T>,
  date: number
): Promise<T | null> {
  const url = chunk
    .toString()
    .replace(/\(\)\s*=>\s*import\s*\("/, "")
    .replace('")', "");
  const key = `meta-${url}`;
  const data = getLocalStorage<ILocalChunkItem<T> | null>(key, null);

  if (data && data.date >= date && data.version === VERSION) {
    return data.data || null;
  } else {
    if (typeof chunk === "function") {
      removeLocalStorage(key);
      try {
        const module = await chunk();
        setLocalStorage<ILocalChunkItem<T>>(key, {
          data: module,
          date: date,
          version: VERSION,
        });

        return module;
      } catch (error) {
        console.error(error);
      }
    }
  }

  return null;
}
