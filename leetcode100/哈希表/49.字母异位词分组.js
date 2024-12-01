// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 思路：第一做的思路，暴力破解
 * 1. 利用字符串排序作为值得大小。值相同得为一个组
 */
{
  var groupAnagrams = function (strs) {
    let result = [];

    // 1. 简历一个hash
    let map = {};

    strs.forEach((item, index) => {
      // 2. 对字符串先拆分数组，然后排序，再拼接
      const value = item.split("").sort().join("");

      // 3. 不存在，初始化
      if (!map[value]) {
        map[value] = [];
      }
      // 4. 存在
      map[value].push(item);
    });

    // 5. 对象转数组
    for (const [key, value] of Object.entries(map)) {
      result.push(value);
    }

    // 6. 返回排序结果
    return result.sort((a, b) => a.length - b.length);
  };
}

/**
 * 思路：官方的思路
 * 1. 思路差不多，
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    // 目的是为了 字符串 -> 数组 -> 排序 -> 字符串
    let array = Array.from(str);
    array.sort();
    let key = array.toString();

    // 根据key建立映射。
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  // map 转 数组
  return Array.from(map.values());
};
