/**
 * Function.prototype.apply(thisArg, argArray = [])
 * 1. apply第二个参数是数组的形式，而call则是直接传递，一个个列出。这是两者最大的区别
 * 2. 所以手写思路和call相同。知识参数的处理不一样
 *
 * 技巧，通过this去拿到调用的函数
 */
Function.prototype.myApply = function (thisArg, argArray) {
  // 1. 拿到调用函数
  let fn = this;

  // 2. 判断
  thisArg = [null, undefined].includes(thisArg) ? globalThis : Object(thisArg);

  // 3. 赋值
  thisArg.fn = fn;

  // 4.执行
  const result = thisArg.fn(...argArray);

  // 4. 优化
  delete thisArg.fn;

  return result;
};

/**
 * call、bind、apply的区别
 * 1. apply接受的的第二个参数是数组，call接受的是一个个参数
 * 2. bind返回的是一个新函数，call和apply是直接执行
 */
