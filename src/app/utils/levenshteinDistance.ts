export function levenshteinDistance(
  str1: string,
  str2: string,
  m: number,
  n: number
): number {
  if (m === 0) {
    return n;
  }

  if (n === 0) {
    return m;
  }

  if (str1[m - 1] === str2[n - 1]) {
    return levenshteinDistance(str1, str2, m - 1, n - 1);
  }

  return (
    1 +
    Math.min(
      // Insert
      levenshteinDistance(str1, str2, m, n - 1),
      // Remove
      levenshteinDistance(str1, str2, m - 1, n),
      // Replace
      levenshteinDistance(str1, str2, m - 1, n - 1)
    )
  );
}
