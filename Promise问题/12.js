const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});
console.log("promise1", promise1);
console.log("promise2", promise2);
setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// promise1 Promise {<pending>}
// promise2 Promise {<pending>}
// test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
// promise1 Promise {<fulfilled>: 'success'}
// promise2 Promise {<rejected>: Error: error!!!}

// 第一次打印 promise1 和 promise2 都是 pending 状态
// 第二次打印的时候，分别调用了 resolve 和 throw
