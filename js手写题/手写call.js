/**
 * 1. Function.prototype.call(thisArg, ...args)
 * 2. 参数1修改this指向，call函数后续的参数 都是 作为函数调用的参数，利用剩余参数语法，存入到数组args中
 * 3. 自定义一个call函数，myCall，我们的myCall会被其他函数所调用，因此通过this可以拿到调用的函数
 * 4. 判断thisArg的类型，处理null、undefined修改为全局对象（推荐使用globalThis，会根据环境决定指向全局对象）
 * 5. 其他thisArg类型通过Object方法转成对象
 * 6. 将调用的函数，赋值给thisArg，并执行
 * 7. 清理多余属性
 * 8. 返回结果
 */

Function.prototype.myCall = function (thisArg, ...args) {
  // 1. 获取调用的函数
  let fn = this;

  // 2. 判断
  thisArg = [null, undefined].includes(thisArg) ? globalThis : Object(thisArg);

  // 3 赋值函数
  thisArg.fn = fn;

  // 4. 执行
  const result = thisArg.fn(...args);

  // 5. 清理
  delete thisArg.fn;

  return result;
};
