// https://leetcode.cn/problems/climbing-stairs/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路1：递归调用
 * 1. n = 0 结果为1
 * 2. n = 1 结果为1
 * 3. n =2， 结果 为2
 * 4. n =3，结果为 3
 * 5. n=4，结果为5
 * 不难发现n的结果和 n-1和n-2的结果相加
 * jump(n) = jimp(n-1) + jimp(n-2)
 * 这时候就可以判断出可以不断递归到最后n=0的情况，一层层返回结果，最后相加
 * 类似问题 509.斐波那契数
 */
{
  var climbStairs = function (n) {
    if (n <= 1) {
      return 1;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
  };
}

/**
 * 思路：
 * 1. 定义: i表示当前台阶，dp[i]保存结果
 * 2. 方程： dp[i] = dp[i-1]+dp[i-2]
 * 3. 遍历循序：0~1顺序渡劫
 * 4. 初始化：dp[0] =0; dp[1] =1
 * 5. 返回结果 dp[n]
 */
var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
