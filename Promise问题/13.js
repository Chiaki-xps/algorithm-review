const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    console.log("timer1");
  }, 1000);
  console.log("promise1里的内容");
});

const promise2 = promise1.then(() => {
  throw new Error("error!!!");
});

console.log("promise1", promise1);
console.log("promise2", promise2);

setTimeout(() => {
  console.log("timer2");
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// promise1里的内容
// promise1 Promise {<pending>}
// promise2 Promise {<pending>}
// timer1
// 报错：test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102
// timer2
// promise1 Promise{<resolved>: "success"}
// promise2 Promise{<rejected>: Error: error!!!}

// 解析：
// 注意 promise2 来 promise1.then。
// 所以 promise2  的状态确定前，需要完成 promise1 的 setTimeout 的 resolve 或者 reject
// 所以 timer1 的执行在 throw 前
