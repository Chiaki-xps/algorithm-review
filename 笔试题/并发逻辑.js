function concurrentLimit(tasks, limit) {
  return new Promise((resolve) => {
    if (tasks.length === 0) return resolve([]);

    const results = new Array(tasks.length);
    let activeCount = 0; // 当前运行任务数
    let nextIndex = 0; // 下一个任务索引
    let completedCount = 0; // 已完成任务数

    const run = () => {
      // 循环启动任务直到达到并发限制
      while (activeCount < limit && nextIndex < tasks.length) {
        const index = nextIndex++;
        const task = tasks[index];
        activeCount++;

        Promise.resolve(task())
          .then((res) => (results[index] = res))
          .catch((err) => (results[index] = err))
          .finally(() => {
            activeCount--;
            completedCount++;

            if (completedCount === tasks.length) {
              resolve(results);
            } else {
              // 使用微任务调度避免递归溢出
              queueMicrotask(run);
            }
          });
      }
    };

    run();
  });
}
