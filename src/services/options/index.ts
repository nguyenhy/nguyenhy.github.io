/**
 * get value of option from config object if not exists then use value from default config
 */
export function getOptions<KS extends Record<string, any>, K extends keyof KS>(
  key: K,
  options: Partial<KS>,
  defaultValue: KS
): KS[K] {
  if (key in options) {
    const value = (options as KS)[key];
    if (typeof value !== "undefined") {
      return value;
    }
  }
  return defaultValue[key];
}
