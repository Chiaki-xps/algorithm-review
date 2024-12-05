// https://leetcode.cn/problems/single-number/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路
 * 1. 排序后，当前位置如何和下一个位置值相同就说明会重复（因为只会出现两次）。
 */
var singleNumber = function (nums) {
  let i = 0;
  nums.sort();

  while (i < nums.length) {
    if (nums[i] !== nums[i + 1]) {
      break;
    }
    i = i + 2;
  }
  return nums[i];
};
