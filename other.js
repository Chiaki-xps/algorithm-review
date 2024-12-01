var findAnagrams = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  console.log("🚀 ~ findAnagrams ~ sCount:", sCount);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++pCount[p[i].charCodeAt() - "a".charCodeAt()];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};

console.log(findAnagrams("cbaebabacd", "abc"));
