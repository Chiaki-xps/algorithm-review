/**
 * 手写防抖函数 debounce.
 * 防抖函数的作用是延迟触发执行函数,在一定时间内,事件多次触发,执行最后一个
 * 1. 可以理解成 debounce 是一个高阶函数,传入一个执行函数,返回一个防抖函数
 * 2. 返回的防抖函数,在单位时间只会执行一次.因此返回函数中会将需要执行得函数,包装到setTimeout中
 * 3. 利用闭包原理,绑定自由变量 timer,实现对还没触发得定时器进行清理,重新创建新的定时器
 *
 * 大白话: 一段时间内，连续执行的时候，取消上一下，重新计时，然后创建新的定时器
 */

// fn 需要进行包装的函数
// delay 单位时间内
function debounce(fn, delay) {
  // 1. 在外部定义一个存储定时器 timerId
  let timerId = null;

  // 2. 返回一个防抖函数
  return function (...args) {
    // 3. 需要清除上一个定时器
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 示例函数：每次用户输入时打印输入内容
function logInput(value) {
  console.log("User input:", value);
}

// 创建防抖函数，延迟 500 毫秒执行 logInput
const debouncedLogInput = debounce(logInput, 500);

// 模拟用户输入
document
  .getElementById("inputField")
  .addEventListener("input", function (event) {
    debouncedLogInput(event.target.value); // 传递输入框的值
  });
