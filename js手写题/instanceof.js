/**
 * 手写instanceof
 *
 * 1. 基础类型判断
 *    - 如果 instance 是 null 或非对象类型（如 number, string, boolean），直接返回 false。
 *
 * 2. 构造函数校验
 *    - constructor 必须是函数，否则抛出错误（与原生的 instanceof 行为一致）。
 *
 * 3. 原型链遍历
 *    - 通过 Object.getPrototypeOf() 获取对象的原型。
 *    - 循环向上查找原型链，直到找到匹配的 constructor.prototype 或到达原型链末端（null）。
 */

function myInstanceof(instance, constructor) {
  // 基础类型直接返回 false
  if (
    instance === null ||
    (typeof instance !== "object" && typeof instance !== "function")
  ) {
    return false;
  }

  // 构造函数必须是函数
  if (typeof constructor !== "function") {
    throw new TypeError('Right-hand side of "instanceof" is not callable');
  }

  // 获取对象的原型
  let proto = Object.getPrototypeOf(instance);
  const prototype = constructor.prototype;

  // 沿着原型链向上查找
  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

// 1. 函数对象
function Foo() {}
console.log(myInstanceof(Foo, Function)); // true

// 2. 修改原型链
const obj = {};
Object.setPrototypeOf(obj, Array.prototype);
console.log(myInstanceof(obj, Array)); // true

// 3. null 或 undefined
console.log(myInstanceof(null, Object)); // false
console.log(myInstanceof(undefined, Object)); // false
