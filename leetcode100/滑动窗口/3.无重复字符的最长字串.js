// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：滑动窗口
 * 1. 返回的结果是一个数组，意味着只要在所有结果中保留最大的就足够
 * 2. tempArr 表示的就是当前滑动窗口里的值，通过不断滑动窗口，与最大值比较
 * 3. right节点当前的值不在tempArr说明可以不断增加长度
 * 4. 如果出现重复的说明left需要向前移动
 * 5. 注意一个问题，比如 bcc, 那么意味着left要不停移动到right节点上。
 */

// 解题一：左循环 套 右循环
var lengthOfLongestSubstring = function (s) {
  const tempArr = [];
  let len = s.length;

  // 右指针
  let right = 0;
  let max = 0;
  for (let left = 0; left < len; left++) {
    // 相当于左边指针移动
    tempArr.shift();

    while (right < len && !tempArr.includes(s[right])) {
      tempArr.push(s[right]);
      right++;
    }
    max = Math.max(max, tempArr.length);
  }
  return max;
};

// 解题二：右循环 套 左循环
var lengthOfLongestSubstring1 = function (s) {
  const arr = [];
  let max = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    // 若当前字符存在，先记录当前无重复长度，再移除左侧字符直到无重复

    while (arr.includes(s[right])) {
      arr.shift();
      left++;
    }

    arr.push(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
};

// 解题三：右循环 套 左循环 简化版本，去掉left
var lengthOfLongestSubstring2 = function (s) {
  const arr = [];
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    if (arr.includes(s[right])) {
      max = Math.max(max, arr.length);

      // 若当前字符存在，先记录当前无重复长度，再移除左侧字符直到无重复
      // 例如 bcc。意味着只 shift 一次是不够，所以需要循环检查
      while (arr.includes(s[right])) {
        arr.shift();
      }
    }
    arr.push(s[right]);
  }

  // 最后一次窗口 也需要比较
  max = Math.max(max, arr.length);

  return max;
};

// TODO：哈希表解法
