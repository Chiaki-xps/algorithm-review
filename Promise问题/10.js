setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// start
// timer1
// promise
// timer2

// 解析：
// timer2 执行前会检查微任务队列，所以先打印 promise
