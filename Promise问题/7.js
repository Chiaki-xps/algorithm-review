console.log("start");
setTimeout(() => {
  console.log("time");
});
Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");

// start
// end
// resolve
// time

// 解析：
// 1. 同步代码立即执行，输出 "start" 和 "end"。
// 2. Promise.resolve() 创建一个立即解决的 Promise，因此 .then() 回调被添加到微任务队列。
// 3. 微任务队列在同步代码执行后处理，输出 "resolve"。
// 4. setTimeout 回调被添加到宏任务队列，稍后执行，输出 "time"。
