
const compactNumberFormatter = new Intl.NumberFormat(undefined, {notation: "compact"})

export function formatCompactNumber(n: number) {
  return compactNumberFormatter.format(n);
}