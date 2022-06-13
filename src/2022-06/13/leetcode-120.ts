/**
 * 120. Triangle
 * https://leetcode.com/problems/triangle/
 */

export function minimumTotal(triangle: number[][]): number {
  const height = triangle.length;
  const dp = new Array(height)
    .fill(undefined)
    .map((_, i) => new Array(i + 1).fill(undefined));
  dp[0][0] = triangle[0][0];

  for (let h = 1; h < height; h++) {
    for (let i = 0; i < h + 1; i++) {
      dp[h][i] =
        triangle[h][i] +
        Math.min(dp[h - 1][i - 1] ?? Infinity, dp[h - 1][i] ?? Infinity);
    }
  }

  return Math.min(...dp[height - 1]);
}
