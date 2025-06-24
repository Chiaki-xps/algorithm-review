const promise1 = new Promise((resolve, reject) => {
  return "resolve1";
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

// 🚀 ~ promise1 ~ promise1: Promise { <pending> }
// 🚀 ~ promise2 ~ promise2: Promise { <pending> }
// 🚀 ~ setTimeout ~ promise1: Promise { <pending> }
// 🚀 ~ setTimeout ~ promise2: Promise { <pending> }

// 注意 Promise 修改状态只能通过 resolve、reject 来改变，所以 return 并不会改变状态
