// https://leetcode.cn/problems/climbing-stairs/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：
 * 1. 定义：dp[i][j], i表示numRows
 * 2. 方程：dp[i][j] = dp[i-1][j -1] ?? 0 + dp[i-1][j]
 * 3. 遍历：0~numRows -1
 * 4. 初始化dp[0][0] = 1
 */
var generate = function (numRows) {
  const c = Array(numRows);
  for (let i = 0; i < numRows; i++) {
    c[i] = Array(i + 1);
    c[i][0] = c[i][i] = 1;
    for (let j = 1; j < i; j++) {
      // 左上方的数 + 正上方的数
      c[i][j] = c[i - 1][j - 1] + c[i - 1][j];
    }
  }
  return c;
};
