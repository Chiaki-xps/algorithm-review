// https://leetcode.cn/problems/fibonacci-number/description/
/**
 * 思路：递归
 * 1. 定义初始值，用于递归到最后进行返回
 * 2. 利用公司不断递归 F(n) = F(n - 1) + F(n - 2)
 */
{
  var fib = function (n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  };
}

/**
 * 思路：优化递归
 * 1. 递归的缺点在于重复计算，可以将计算好的值保存起来，传参的形式跟随递归传入
 */
{
  function fib(n, memo = []) {
    if (n <= 1) return n;

    // 求n的值
    // 把已经在n位置上，计算过的值保存下来，用到的时候再直接取出，没有的再递归
    if (memo[n]) {
      return memo[n];
    }

    // 没有从memo中获取到题
    const res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res; // 将n位置的结果存储到memo中

    return res;
  }
}

/**
 * 思路：动态规划
 * 1. 定义：dp[n] 表示当前的的结果，n表示下标值
 * 2. 初始化：dp[0] = 0 dp[1] = 1
 * 3. 方程: dp[n] = dp[n-1] + dp[n-2]
 * 4. 遍历顺序: 从0~n
 */
{
  function fib(n) {
    // n位置的值 (n-1) + (n-2)
    const dp = [];

    // i从0开始，最终找到n位置的解，一般称之为自底向上的解法
    // 从0开始，每个子问题的解都求到之后，最终求n的解
    for (let i = 0; i <= n; i++) {
      // 初始化状态0和1位置对应的数字是0和1
      if (i <= 1) {
        dp[i] = i;
        continue;
      }

      // 第n(n>1)个位子的时候，dp[n] = dp[n - 1] + dp[n - 2];
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
  }
}
{
  function fib(n) {
    // 1. 定义状态
    // dp保留斐波那契数列中每一个位置对应的值(状态)
    // dp[x]表示的就是x位置对应的值(状态)
    //  dp数组的作用就是把所有子问题的解都保存下来
    // 子问题或原问题都需要从dp数组中拿去需要的子问题解

    // 2. 状态转移方程: dp[i] = dp[i-1] + dp[i-2]
    // 状态转移方程通常都是写在循环(for/while)中

    // 3. 设置初始化状态: dp[0]/dp[1]初始化状态
    // 4. 计算最终的结果

    // 1. 定义状态
    const dp = [];

    // 2. 初始化状态
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
      // 3. 状态转移方程
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    // 4. 计算最终的结果
    return dp[n];
  }
}

// 状态压缩
function fib(n) {
  // 事实上我们的子问题只和我们的前两个子问题的解，有关系
  // 这时候我们的dp实际上不需要每个子问题都保存下来，只需要记录下最近的两个子问题解就够了
  // 这就是状态压缩

  if (n <= 1) return n;

  // 1. 定义状态
  // 2. 初始化状态
  let prev = 0;
  let cur = 1;

  for (let i = 2; i <= n; i++) {
    // 3. 状态转移方程

    // newValue相当于i位置
    const newValue = prev + cur;
    prev = cur;
    cur = newValue;
  }

  // 4. 计算最终的结果
  return cur;
}
