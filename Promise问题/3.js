const promise = new Promise((resolve, reject) => {
  console.log(1);
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

// promise.then并不会执行，它只有在被改变了状态之后才会执行。
