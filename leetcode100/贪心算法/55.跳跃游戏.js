// https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：贪心算法
 * 0. 每个当前位置i加上nums[i]就是当前最远距离，只要遍历的i，能够在Math.max(max, i + nums[i])范围内就行，如果遍历完成整个nums，就说明能够跳到
 * 1. 可以把问题简化成，记录下我能跳到的位置，记录这个位置跳的最远距离。
 * 2. 如果存在最远距离大于nums长度的，说明是跳的到的
 * 3. 第一个要思考的是怎么知道哪位位置是能跳到的。记录一个max，从i = 0开始
 * 4. 每次遍历的i只要小于max，说明是跳的到的，如果出现i大于max，说明跳不到，那也说明没办法跳到头
 * 5. 第二个要如何知道每个位置跳到的最远距离 nums[i] + i。然后和max比较保留最大
 */
var canJump = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false;
    }
    max = Math.max(max, i + nums[i]);
  }
  // 如果你能遍历完，说明你能跳到最后 num.length <= max
  return true;
};
