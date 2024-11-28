/**
 * Function.prototype.bind(thisArg, ...argArray)
 * 1. bind和call接受参数的方式是一样的，但是区别是call会对调用的函数执行，而bind会返回一个修改this后的新函数
 * 2. 需要注意因为返回的是一个新函数，新函数也会接受参数args。因此需要函数bind和新函数参数
 */
Function.prototype.myBind = function (thisArg, ...argArray) {
  let fn = this;

  function proxyFn(...args) {
    thisArg.fn = fn;
    // 需要合并一下参数
    let finalArgs = [...argArray, ...args];

    let result = thisArg.fn(...finalArgs);

    delete thisArg.fn;

    return result;
  }

  return proxyFn;
};
