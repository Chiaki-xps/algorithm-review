/**
 * 1. new Promise接受一个函数，接受两个参数，resolve和reject
 * 2. resolve 完成状态，reject 失败状态
 * 3. 注意Promise 没办法捕获异步的错误
 */

const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  // 定义私有属性
  #state = "pending";
  #result = undefined;
  // 保存多次调用then的时候，传入的方法
  #handlers = [];

  // executor 接受的函数
  constructor(executor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };

    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  #changeState(state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    this.#run();
  }

  #isPromiseLike(data) {
    return (
      data instanceof MyPromise || (data && typeof data.then === "function")
    );
  }

  #runMicroTask(func) {}

  #runOne(callback, resolve, reject) {
    if (typeof callback !== "function") {
      const settled = this.#state === FULFILLED ? resolve : reject;
      settled(this.#result);
      return;
    }

    try {
      const data = callback(this.#result);
      if (this.#isPromiseLike(data)) {
        data.then(resolve, reject);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  }

  #run() {
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.shift();

      if (this.#state === FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      } else {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  }

  // tip： then 放回的也是一个Promise。Promise.then() 方法返回一个新的 Promise 实例,并且是一个微任务
  // 因此我们直接return new Promise
  // 而Promise 的执行是同步的，所以会根据当前状态，决定执行 resolve 、reject
  // 但是会出现 Promise 同步执行，但是状态还没有发生改变的情况
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });

      this.#run();
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 1000);
});

p.then(null, (err) => {
  console.log("失败", err);
}).then((data) => {
  console.log("成功", data);
});

/**
 * 判断是否是一个Promise
 * 当前值为对象或者函数，并且实现了then方法，就可以认为是一个Promise
 */

function isPromiseLike(value) {
  return (
    value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof value.then === "function"
  );
}

/**
 * 实现一个微任务队列
 */
function runMicroTask(func) {
  // node环境 process.nextTick
  if (process?.nextTick) {
    process.nextTick(func);
  }
  // 浏览器环境 MutationObserver 执行的就是微任务
  else if (typeof MutationObserver === "function") {
    const observer = new MutationObserver(func);
    // 创建一个节点让他监听
    const textNode = document.createTextNode("1");

    // 需要监听节点
    observer.observe(textNode, {
      // characterData的作用是监听节点内容或节点文本的变化
      characterData: true,
    });
    // 手动改节点触发微任务执行
    textNode.data = "2";
  } else {
    // setTimeout 也可以实现微任务
    setTimeout(func);
  }
}
