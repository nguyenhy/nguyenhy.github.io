interface TLocalData<T> {
  val: T;
}
/**
 * @param key key need to get into LocalStorage
 */
export function getLocalStorage<T = any>(key: string, defaultValue: T): T {
  return get("local", key, defaultValue);
}

/**
 * insert a set of (key, value) into LocalStorage
 */
export function setLocalStorage<T = any>(key: string, value: T): void {
  return set("local", key, value);
}

export function removeLocalStorage(key: string): void {
  return remove("local", key);
}

/**
 * @param key key need to get into SessionStorage
 */
export function getSessionStorage<T = any>(key: string, defaultValue: T): T {
  return get("session", key, defaultValue);
}

/**
 * insert a set of (key, value) into SessionStorage
 */
export function setSessionStorage<T = any>(key: string, value: T): void {
  return set("session", key, value);
}

export function removeSessionStorage(key: string): void {
  return remove("session", key);
}

/**
 * @param key key need to get into Storage
 */
function get<T = any>(
  type: "session" | "local",
  key: string,
  defaultValue: T
): T {
  try {
    const storage = getStorage(type);
    if (!storage) {
      return defaultValue;
    }

    const localData = storage.getItem(key);
    if (typeof localData !== "string") {
      return defaultValue;
    }

    const data: TLocalData<T> = JSON.parse(localData);
    return data.val || defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}

/**
 * insert a set of (key, value) into Storage
 */
function set<T = any>(type: "session" | "local", key: string, value: T): void {
  try {
    const storage = getStorage(type);
    if (!storage) {
      return;
    }

    const data: TLocalData<T> = { val: value };
    storage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
}

function remove(type: "session" | "local", key: string): void {
  try {
    const storage = getStorage(type);
    if (!storage) {
      return;
    }

    storage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}

/**
 * @throw DOMException: Failed to read the 'XXXStorage' property from 'Window': Access is denied for this document.
 */
function getStorage(type: "session" | "local") {
  if (type === "local") {
    return window.localStorage;
  } else if (type === "session") {
    return window.sessionStorage;
  }
  return null;
}
