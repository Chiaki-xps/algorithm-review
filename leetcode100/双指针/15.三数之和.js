// https://leetcode.cn/problems/3sum/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：排序加双指针
 * 1. 题目并不要求返回的结果的顺序，先排序。排序的主要目的是压缩结果，例如[a,b,c]，[b,a,c]等，统一只有[a,b,c]
 * 2. 经过排序后 a<b<c。同时要满足 a+b+c=0
 * 3. 那么我们可以把b、c作为对撞指针，如果三个之和大于0，说明c要移动。小于0，b要移动。
 * 5. 双指针最大的作用就是把两次遍历，压缩成一次
 */
var threeSum = function (nums) {
  let ans = [];
  const len = nums.length;
  // 小于3就没必要遍历了
  if (nums == null || len < 3) return ans;

  // 排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    // 最小值大于0，后续不可能存在相加等于0的情况
    if (nums[i] > 0) break;
    // 去掉相同值遍历
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重
        while (L < R && nums[R] == nums[R - 1]) R--; // 去重
        L++;
        R--;
      } else if (sum < 0) {
        while (L < R && nums[L] == nums[L + 1]) L++; // 去重
        L++;
      } else if (sum > 0) {
        while (L < R && nums[R] == nums[R - 1]) R--; // 去重
        R--;
      }
    }
  }
  return ans;
};
