/**
 * get value of option from config object if not exists then use value from default config
 */
export function getOptions<KS extends Record<string, any>, K extends keyof KS>(
  key: K,
  options: Partial<KS>,
  defaultOptions: KS
): KS[K] {
  if (key in options) {
    const value = (options as KS)[key];
    if (typeof value !== "undefined") {
      return value;
    }
  }
  return defaultOptions[key];
}

/**
 * get value of option from config object if not exists then use default value
 */
export function getValue<
  O extends Record<string, any>,
  K extends keyof O,
  V extends O[K]
>(object: O, key: K, defaultValue: V | null) {
  if (key in object && !!object[key]) {
    return object[key];
  } else if (defaultValue) {
    return defaultValue;
  }
}
