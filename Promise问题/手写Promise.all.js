/**
 * 手写Promise.all
 * all 接受一个数组，
 */
Promise.myAll = function (promiseArr) {
  // 1. 返回一个新的Promise实例
  return new Promise((resolve, reject) => {
    // 2. 检查输入：若非数组，立即拒绝
    if (!Array.isArray(promiseArr)) {
      return reject(new TypeError("Argument must be an array"));
    }

    let results = []; // 存储结果（按顺序）
    let completed = 0; // 已完成的Promise计数器
    const total = promiseArr.length;

    // 3. 处理空数组：立即解析空结果
    if (total === 0) {
      resolve(results);
      return;
    }

    // 4. 遍历每个Promise
    promiseArr.forEach((promise, index) => {
      // 5. 用Promise.resolve包裹以确保处理非Promise值
      Promise.resolve(promise)
        .then((value) => {
          // 6. 将结果按索引存入
          results[index] = value;
          completed++;
          // 7. 全部完成时解析结果
          if (completed === total) {
            resolve(results);
          }
        })
        .catch(reject); // 8. 任意失败则立即拒绝
    });
  });
};
