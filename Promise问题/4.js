const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
  resolve("resolve1");
});
const promise2 = promise1.then((res) => {
  console.log(res);
});
console.log("1", promise1);
console.log("2", promise2);

// promise1
// 1 Promise {<fulfilled>: 'resolve1'}
// 2 Promise {<pending>}
// resolve1

// 解析：
// 1. promise1 的构造函数是同步执行的，所以会立即输出 "promise1"。
// 2. promise1 的 resolve 函数被调用时，promise1 的状态变为 "fulfilled"，并且 resolve 的参数 "resolve1" 被传递给 .then() 的回调函数。
// 3. promise2 的构造函数是异步执行的，所以会立即输出 "2 <pending>"。

// 注意 promise1 打印出来是一个 Promise 对象，并且由于 resolve 函数被调用，所以 promise1 的状态变为 "fulfilled"，
