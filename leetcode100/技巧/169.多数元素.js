// https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：哈希表
 * 1. map收集存在
 * 2. 找到收集中最大值
 */
{
  var majorityElement = function (nums) {
    let result;
    let max = 0;
    const map = new Map();

    nums.forEach((item) => {
      map.set(item, (map.get(item) ?? 0) + 1);
    });

    map.forEach((value, key) => {
      if (value > max) {
        max = value;
        result = key;
      }
    });

    return result;
  };
}

/**
 * 思路：技巧
 * 1. 注意一定存在大于 n/2
 * 2. 那么就说明排序后，中间的位置一定是数量最多的那个值
 */
{
  var majorityElement = function (nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2) + 1];
  };
}

/**
 * 思路：分治法
 * 1.
 */
var majorityElement = function (nums) {
  const getMode = (low, high) => {
    if (low === high) return nums[low];

    //拆分成更小的区间，一分为二
    let mid = Math.floor((low + high) / 2);

    let left = getMode(low, mid);
    let right = getMode(mid + 1, high);

    if (left === right) return left;

    // 统计区间内 left 的个数
    let leftCount = getCount(left, low, high);
    // 统计区间内 right 的个数
    let rightCount = getCount(right, low, high);

    // 返回 left 和 right 中个数多的那个
    return leftCount > rightCount ? left : right;
  };

  //统计 low 到 high 之间 num 的数量
  var getCount = (num, low, high) => {
    let count = 0;
    for (let i = low; i <= high; i++) {
      if (nums[i] === num) count++;
    }
    return count;
  };

  return getMode(0, nums.length - 1);
};
