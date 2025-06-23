const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
fn().then((res) => {
  console.log(res);
});
console.log("start");

// 1
// start
// success

// 解析：
// 1. fn() 的构造函数是同步执行的，所以会立即输出 1。
// 2. fn() 的 resolve 函数被调用时，fn() 的状态变为 "fulfilled"，并且 resolve 的参数 "success" 被传递给 .then() 的回调函数。
// 3. .then() 回调是异步的（微任务），所以会等到同步代码执行完毕后才会执行。
// 4. 同步代码继续执行，输出 "start"。
// 5. 微任务队列在同步代码执行后处理，执行 .then() 回调，输出 "success"。
