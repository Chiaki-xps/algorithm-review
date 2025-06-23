Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");

// start
// promise1
// timer1
// promise2
// timer2

// 解析：
// 核心还是 在执行宏任务前检查微任务队列
