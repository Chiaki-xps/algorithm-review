// https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked
/**
 *
 */

var findAnagrams = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  const result = [];
  if (pLen > sLen) return result;
};

/**
 * 思路：第一次做，可以参考49题。当时我用了一个字符串排序，然后比较想等来证明是相同的异位词
 * 思路应该没有错，但是超时了。
 */

{
  var findAnagrams = function (s, p) {
    // 用来记录所有符合的左指针
    let result = [];

    if (p.length > s.length) return result;
    // 给p排序
    const pKey = Array.from(p).sort().toString();

    for (let left = 0; left < s.length - p.length + 1; left++) {
      // 拿到窗口
      let tempStr = s.slice(left, left + p.length);

      if (Array.from(tempStr).sort().toString() === pKey) {
        result.push(left);
      }
    }
    return result;
  };
}

console.log(findAnagrams("cbaebabacd", "abc"));
