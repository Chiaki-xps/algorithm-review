// https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：双指针
 * 1. 使用对撞指针left right
 * 2. 在尽可能长的距离下，两边的板子尽可能的长
 * 3. 因此每次找到最小的短板进行移动，与上一个距离更长的进行比较，得到最大值。如此反复
 */
var maxArea = function (height) {
  let result = 0;
  let right = height.length - 1;
  let left = 0;

  while (right > left) {
    if (height[right] > height[left]) {
      result = Math.max(result, height[left] * (right - left));
      left++;
    } else {
      result = Math.max(result, height[right] * (right - left));
      right--;
    }
  }

  return result;
};

/**
 * 思路：第一次做，暴力做法，每一根线作为起点能够用存储的最大水量
 */
{
  var maxArea = function (height) {
    let result = 0;
    for (let i = 0; i < height.length - 1; i++) {
      for (let j = i + 1; j < height.length; j++) {
        const minHeight = Math.min(height[i], height[j]);
        result = Math.max(result, (j - i) * minHeight);
      }
    }

    return result;
  };
}
