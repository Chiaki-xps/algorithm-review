const promise1 = new Promise((resolve, reject) => {
  resolve("resolve1");
});

promise1
  .then((res) => {
    console.log("🚀 ~ promise2 ~ res:", res);
  })
  .then((res) => {
    console.log("🚀 ~ promise3 ~ res:", res);
  });

console.log("🚀 ~ promise1 ~ promise1:", promise1);

// 🚀 ~ promise1 ~ promise1: Promise { 'resolve1' }
// 🚀 ~ promise2 ~ res: resolve1
// 🚀 ~ promise3 ~ res: undefined

// 第二个 then 接受 第一个 then 的返回值
// 第一个 then 没有返回值，所以返回的 Promise 状态是 resolved,值为 undefined
// 所以打印 promise3 ~ res: undefined
