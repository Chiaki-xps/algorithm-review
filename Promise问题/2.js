const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve("success");
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

// 输出：
// 1
// 2
// 4
// 3

// 解析：
// ​1. ​Promise 构造函数的执行是同步的​​：当创建 new Promise 时，其执行器函数 (resolve, reject) => { ... } 会立即同步执行。
//    - 在执行器函数中，console.log(1); 会立即输出 1。
//    - resolve("success"); 将 Promise 的状态设置为解决（fulfilled），但不会立即执行 .then() 中的回调（因为回调是异步的）。
// 2. console.log(2); 同步执行，输出 2。
// 3. .then() 回调是异步的（微任务）​​：promise.then(() => { console.log(3); }); 为 Promise 添加解决回调。由于 Promise 已经在构造函数中被解决，
// 回调会被放入 ​​微任务队列（microtask queue）​​，但不会立即执行。
// 4. 同步代码继续执行​​：console.log(4); 是同步代码，输出 4。
// 5. 微任务队列在同步代码执行后处理​​：当所有同步代码执行完毕（输出 1、2、4 后），事件循环开始处理微任务队列，执行 .then() 回调，输出 3。
