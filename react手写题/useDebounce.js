import { useEffect, useRef } from "react";

/**
 * 针对 state 进行防抖
 * 接收三个参数
 * 1. fn：需要防抖的函数
 * 2. ms：防抖时间
 * 3. deps：依赖项
 *
 * 利用 useEffect 注册了防抖函数，在deps变化时，清除上一次的定时器，并重新设置新的定时器
 * 所以 useDebounce 只需要返回清除副作用的方法就行
 * 需要利用useRef来存储定时器，因为useEffect的回调函数会在组件每次渲染时执行，
 * 如果使用let声明定时器，会导致每次渲染时都创建一个新的定时器，从而导致防抖失效
 *
 * 作用，控制一定频率的state改变
 */
const useDebounce = (fn, ms, deps) => {
  const timer = useRef(null);

  // 通过useEffect实现防抖，在deps变化时，清除上一次的定时器，并重新设置新的定时器
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn();
    }, ms);
  }, deps);

  const cancel = () => {
    clearTimeout(timer.current);
    timer.current = null;
  };

  return [cancel];
};

export default useDebounce;
