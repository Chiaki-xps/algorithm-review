const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

// 1
// 2
// 4
// timerStart
// timerEnd
// success

// 解析：
// 1. 同步代码立即执行，输出 1 和 2。
// 2. promise 的构造函数是同步执行的，所以会立即输出 1。
// 3. setTimeout 回调被添加到宏任务队列，稍后执行，输出 "timerStart" 和 "timerEnd"。
// 4. promise 的 .then() 回调是异步的（微任务），所以会等到同步代码执行完毕后才会执行。
// 5. 同步代码继续执行，输出 4。
