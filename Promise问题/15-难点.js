const promise1 = new Promise((resolve, reject) => {
  resolve("resolve1");
});

const promise2 = promise1.then((res) => {
  console.log("🚀 ~ promise2 ~ res:", res);
});

console.log("🚀 ~ promise1 ~ promise1:", promise1);
console.log("🚀 ~ promise2 ~ promise2:", promise2);

setTimeout(() => {
  console.log("🚀 ~ setTimeout ~ promise1:", promise1);
  console.log("🚀 ~ setTimeout ~ promise2:", promise2);
}, 2000);

// 🚀 ~ promise1 ~ promise1: Promise { 'resolve1' }
// 🚀 ~ promise2 ~ promise2: Promise { <pending> }
// 🚀 ~ promise2 ~ res: resolve1
// 🚀 ~ setTimeout ~ promise1: Promise { 'resolve1' }
// 🚀 ~ setTimeout ~ promise2: Promise { undefined }

// 解析
// 难点在于最后一个 setTimeout 的 promise2 是 undefined
// 如果Promise.then 没有返回值，那么返回的 Promise 状态是 resolved,值为 undefined
