export function getOptions<KS extends Record<string, any>, K extends keyof KS>(
  key: K,
  options: Partial<KS>,
  defaultValue: KS
): KS[K] {
  const a = options[key];
  return typeof a !== "undefined" ? a : defaultValue[key];
}
