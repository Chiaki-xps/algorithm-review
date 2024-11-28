/**
 * 节流 Throttle 在一定时间内，执行函数只执行一次
 * Throttle 可以理解成一个高阶函数，接收一个执行函数，返回一个节流函数。
 */

// fn 执行函数
// wait 单位时间内
function throttle(fn, wait) {
  // 1. 需要记录上一次执行时间，如果 当前执行时间 - 上一次执行时间 < wait 那么不执行
  let lastTime = 0;
  let timer = null;

  return function (...args) {
    const now = Date.now();

    // 超过wait，说明可以执行
    if (now - lastTime >= wait) {
      // 如果节流间隔后存在正常响应函数,将"最后一次响应函数"的定时器清除
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      // 重置 lastTime
      lastTime = now;
      fn.apply(this, args);
    } else {
      // 如果没有超过时间间隔，可以使用setTimeout延迟执行
      if (!timer) {
        timer = setTimeout(() => {
          lastTime = Date.now();
          fn.apply(this, args);
          timer = null;
        }, wait - (now - lastTime));
      }
    }
  };
}
