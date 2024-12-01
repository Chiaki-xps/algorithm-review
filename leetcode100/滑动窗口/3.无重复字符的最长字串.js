// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：滑动窗口
 * 1. 返回的结果是一个数组，意味着只要在所有结果中保留最大的就足够
 * 2. tempArr 表示的就是当前滑动窗口里的值，通过不断滑动窗口，与最大值比较
 * 3. right节点当前的值不在tempArr说明可以不断增加长度
 * 4. 如果出现重复的说明left需要向前移动
 */
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
