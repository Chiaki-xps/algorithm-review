// 短字符串在长字符串中出现的次数
/**
 * 1. 判断哪一个是长字符串，哪一个是短字符串
 * 2. 通过indexOf()方法判断短字符串在长字符串中出现的次数
 * 3. 利用indexOf()方法的第二个参数，指定开始搜索的位置
 */
function countOccurrences(longString, shortString) {
  if (shortString.length > longString.length) {
    [longString, shortString] = [shortString, longString];
  }

  let count = 0;
  let startIndex = 0;

  while (true) {
    const index = longString.indexOf(shortString, startIndex);
    if (index === -1) {
      break;
    }
    count++;
    startIndex = index + 1;
  }

  return count;
}

console.log(countOccurrences("teacheraaa", "a"));
console.log(countOccurrences("teacheraaa", "aa"));
