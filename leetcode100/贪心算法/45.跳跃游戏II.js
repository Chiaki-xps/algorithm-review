// https://leetcode.cn/problems/jump-game-ii/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：贪心算法
 * 1. 大白话，能够跳到nums.length,最少需要几步
 * 2. 可以把问题简化成 跳到当前位置允许最远的距离
 * 3. 从最后一个nuns.length，然后遍历 0~i，找到当前允许的最距离。那么意味着找到下一个i。
 * 3. 反复，记录跳跃次数
 * 4. 可以想象成从最后一个位置往后跳跃
 */
{
  var jump = function (nums) {
    //
    let position = nums.length - 1;
    let steps = 0;
    while (position > 0) {
      for (let i = 0; i < position; i++) {
        if (i + nums[i] >= position) {
          // 往后跳
          position = i;
          steps++;
          break;
        }
      }
    }
    return steps;
  };
}

/**
 * 思路：动态规划
 * 1. 定义：dp表示跳跃到当前i位置，最少的次数
 * 2. 初始化：dp[0] = 0, dp[1] = 1
 * 3. 遍历顺序：两层遍历0~nums.length-1遍历每一个位置。对于每一个位置i需要重新遍历0~i
 * 4. 方程：dp[i] = Math.min(dp[i], dp[j] +1)
 * 5. 通过遍历j位置，找到符合 j 位置跳到 i位置的j值，拿到j位置跳的最小次数，+1表示跳到i
 * 6. 计算最终结果 dp[nums.length - 1]
 */
{
  var jump = function (nums) {
    if (nums.length < 3) return nums.length - 1;
    const dp = new Array(nums.length).fill(Infinity);

    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i < nums.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        // 往前找，找到能走到当前位置的， + 1代表走一步到当前位置
        if (j + nums[j] >= i) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
    return dp[nums.length - 1];
  };
}

/**
 * 思路：
 * 1.
 */
var jump = function (nums) {};
