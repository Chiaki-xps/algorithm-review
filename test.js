// 提供测试方法
const testAlgorithm = (func) => {
  let a = [45, 12, 36, 15, 77, 252, 95, 12, 41];
  func(a);
  console.log("🚀 ~ testAlgorithm ~ a:", a);
};

module.exports = {
  testAlgorithm,
};
