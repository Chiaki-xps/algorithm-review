// https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * 思路：
 * 在数组里头找到最长的连续子序列。
 * 关键字：连续，意味着下一个值，是当前值+1。
 * 1. 建立hash表，Set，不需要保存index，因为我们只需要证明存在，返回长度。
 * 2. 对所有结果进行遍历，记录最长的结果result
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 1. 建立一个集合
  let mySet = new Set();
  // 2. 存数据
  nums.forEach((item) => mySet.add(item));

  let result = 0;

  // 3. 遍历集合
  for (const num of mySet) {
    // 4. 优化。因为是连续，所以存在比他小1，可以不遍历
    if (!mySet.has(num - 1)) {
      let curNumber = num;
      let curLength = 1;

      // 5. 如果当前值有连续得，继续+1.并且记录长度
      while (mySet.has(curNumber + 1)) {
        curNumber++;
        curLength++;
      }
      // 6. 完成一次遍历，保存最长得结果
      result = Math.max(curLength, result);
    }
  }

  return result;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
