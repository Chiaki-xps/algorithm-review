// js两个小数相加（字节面试）
// 任意两个小树相加，返回结果
function addDecimals(a, b) {
  // 单词 multiplier 乘数
  // Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base的exponent次方
  const multiplier = Math.pow(
    10,
    Math.max(getDecimalLength(a), getDecimalLength(b))
  );
  // 直接小数变成整数相加，然后再除以10的n次方
  return (a * multiplier + b * multiplier) / multiplier;
}

// 获取小数位数
function getDecimalLength(num) {
  const decimalPart = ("" + num).split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

console.log(addDecimals(0.1, 0.2)); // 输出 0.3
console.log(addDecimals(1.001, 2.002)); // 输出 3.003
