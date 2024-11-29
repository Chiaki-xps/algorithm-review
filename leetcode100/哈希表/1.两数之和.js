// https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：暴力循环破解
 */
{
  var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] + nums[i] === target) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  };
}

/**
 * 思路：哈希表
 * 1. 创建一个哈希表new Map()
 * 2. 进行一次遍历，先把值存进去 map[num] = num 对应的 index
 * 3. 根据相差的diff，如果在map中能找到，说明之前遍历进去了，作为 prevIndex
 * 4. 通过hash表，直接取值的方式，减少一次循环
 */
{
  var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      prevIndex = map[target - nums[i]];
      // 注意如果值是0的情况
      if (prevIndex !== undefined) {
        return [prevIndex, i];
      }
      map[num] = i;
    }
    return [-1, -1];
  };
}

/**
 *
 * 思路：第一次做的思路，不推荐
 * 1. target减去每一个值（item）得到的差（diff），用 差 查找数组存在所有相同的值（因为数组值可以重复），得到一个所有差在nums中index的数组diffIndexArr
 * 2. 如果数组不为空，那么取数组中值大于当前值位置的值
 */
{
  var twoSum = function (nums, target) {
    let result = [];

    nums.forEach((item, index) => {
      const diff = target - item;
      let diffIndexArr = [];

      nums.forEach((item, index) => {
        if (item === diff) {
          diffIndexArr.push(index);
        }
      });

      // 如果不存在，下一个
      if (!diffIndexArr.length) {
        return;
      }

      // 找打比当前index更大的值，表示在当前值的后面
      const diffIndex = diffIndexArr.find((item) => item > index);

      if (diffIndex && !result.length) {
        result = [index, diffIndex];
      }
    });

    return result;
  };
}

// 测试
// twoSum([2, 7, 11, 15], 9);
// twoSum([3, 2, 4], 6);
// twoSum([3, 3], 6);
