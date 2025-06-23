setTimeout(() => {
  console.log("timer1");
  setTimeout(() => {
    console.log("timer3");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// start
// timer1
// timer2
// timer3

// 解析：
// 1. 同步代码立即执行，输出 "start"。
// 2. setTimeout 回调被添加到宏任务队列，稍后执行，输出 "timer1" 和 "timer2"。
// 3. 微任务队列在同步代码执行后处理，执行 .then() 回调，输出 "success"。
// 4. 同步代码继续执行，输出 "start"。
