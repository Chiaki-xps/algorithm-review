// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：暴力破解：超时
 */

{
  var maxProfit = function (prices) {
    let max = 0;
    let len = prices.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
    return max;
  };
}

/**
 * 思路：贪心算法
 * 例子 [2,100,1,3]
 * 1. 看到数组第一个反应需要遍历
 * 2. 贪心：每次遍历的值，如果比上一个买入值小，就换成这一天买入,然后后续比它大的计算收益
 * 3. 因此需要一个变量记录买入最小的一天。
 * 4. 从我们的例子中不难发现，最小的那天并不代表是收益最大的，也就是收益最大和最小没有必然关系。
 * 5. 因此增加一个变量初始值0，记录每个买入的小值最大收益。
 * 6. 如果比买入的大，就去计算收益多少。收益初始值永远记录的收益最高的数字
 */
{
  var maxProfit = function (prices) {
    let max = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
      // 这里相当于每次遇到比他更小的，就去算这个更小的实现的最大收益有没有比起那么遍历计算到的最大收益大
      if (prices[i] < min) {
        min = prices[i];
      } else {
        max = Math.max(max, prices[i] - min);
      }
    }
    return max;
  };
}

/**
 * 思路：动态规划
 * 1. 定义：dp 数组。dp[i]代表i天买入的最大收益
 * 2. 方程：dp[i] = prices[i] - 前面的最小价格minPrice
 * 3. 遍历顺序：按顺序遍历
 */
{
  function maxProfit(prices) {
    let dp = [];
    let minPiece = Infinity;

    for (let i = 0; i < prices.length; i++) {
      minPiece = minPiece > prices[i] ? prices[i] : minPiece;
      dp[i] = prices[i] - minPiece;
    }
    return Math.max(...dp);
  }
}

/**
 * 思路：动态规划
 * 1. 定义状态：dp[i]表示当天i最大收益
 * 2. 方程：dp[i] = Math.max(dp[i-1], prices[i] - minPiece)。
 * 3. 遍历顺序：0-i
 * 4. 初始化： dp[0] = 0
 */
function maxProfit(prices) {
  if (prices.length < 1) return 0;
  const dp = [];
  dp[0] = 0;
  let minPiece = prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - minPiece);
    minPiece = minPiece > prices[i] ? prices[i] : minPiece;
  }

  return dp[prices.length - 1];
}
