// 0.1 + 0.2
// 类似的题目参考：js任意两个小数相加.js
function add(a, b) {
  const [a1, a2] = a.toString().split(".");
  const [b1, b2] = b.toString().split(".");

  const length = Math.max(a2.length, b2.length);
  const pow = Math.pow(10, length);

  a = a * pow + b * pow;

  return a / pow;
}

console.log(add(0.1, 0.2));
