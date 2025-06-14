// 题目：将形如 [[0, 1], [2, [3], 4], [5]] 的数组转成一维数组

// 方法一
function flatten(array) {
  return array.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    }
    return acc.concat(item);
  }, []);
}

// 方法二
function flatten2(array, arr = []) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flatten2(item, arr);
    } else {
      arr.push(item);
    }
  });
  return arr;
}

// 测试代码
console.log(flatten([[0, 1], [2, [3], 4], [5]])); // 输出：[0, 1, 2, 3, 4, 5]
console.log(flatten([0, 1, 2, 3, 4, 5])); // 输出：[0, 1, 2, 3, 4, 5]
