// 给一个整数数组，然后找出出现次数为2的数字
function findElementsWithCountTwo(arr) {
  const elementCount = {};

  // 统计每个元素出现的次数
  arr.forEach((num) => {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  });

  // 过滤出出现次数为2的元素
  const result = [];
  for (const num in elementCount) {
    if (elementCount[num] === 2) {
      result.push(Number(num));
    }
  }

  return result;
}

// 示例用法
const numbers = [1, 2, 3, 4, 5, 2, 6, 7, 8, 9, 3];
console.log(findElementsWithCountTwo(numbers)); // 输出: [2, 3]
