const promise1 = new Promise((resolve, reject) => {
  console.log("promise1");
});
console.log("1", promise1);

// 输出：
// promise1
// 1 Promise { <pending> }

// 解析：
// 在执行 new Promise 时，传入的函数立即执行，所以会先输出 "promise1"
// 然后，promise1 被创建为一个 pending 状态的 Promise 对象，最后输出 "1" 和这个 Promise 对象。
// promise1 的状态是 pending，因为没有调用 resolve 或 reject
