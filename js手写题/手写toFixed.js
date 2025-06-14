function toFixed(value, digits) {
  if (typeof value !== "number") {
    throw new TypeError("value must be a number");
  }
  if (typeof digits !== "number" || digits < 0 || digits > 20) {
    throw new RangeError("digits must be between 0 and 20");
  }

  const multiplier = Math.pow(10, digits);
  const rounded = Math.round(value * multiplier) / multiplier;

  const str = rounded.toString();
  const [integer, decimal = ""] = str.split(".");

  if (digits === 0) {
    return integer;
  }

  const paddedDecimal = decimal.padEnd(digits, "0");
  return `${integer}.${paddedDecimal}`;
}

// 测试代码
console.log("Right", toFixed(4.05, 1)); // 输出：'4.1' 正确
console.log(toFixed(3.14159, 2)); // 输出：'3.14'
console.log(toFixed(2.5, 0)); // 输出：'3'
console.log(toFixed(2.4, 0)); // 输出：'2'
console.log(toFixed(2.345, 2)); // 输出：'2.35'
