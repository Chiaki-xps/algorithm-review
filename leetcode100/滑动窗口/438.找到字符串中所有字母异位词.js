// https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked
/**
 *  思路：
 * 1. 取得是异位词。可以通过基数的方法，判断s当前窗口的计数是否和p相同
 */

var findAnagrams = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  // 初始化26位字符。index 0～25 表示 a～z。值初始化为0
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);

  for (let i = 0; i < pLen; ++i) {
    // 1. 初始化
    // 拿到当前字母所在的index，给他的值加1.表示出现过的次数
    ++sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++pCount[p[i].charCodeAt() - "a".charCodeAt()];
  }

  // 判断0位置是否存在异位词
  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  // 2. i为做指针，i+pLen为右指针。初始值0已经判单过了，向前移动先，要减去左指针的的计数，把右指针的加入。
  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
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
