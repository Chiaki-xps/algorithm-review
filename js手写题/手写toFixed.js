function toFixed(value, digits) {
  if (typeof value !== "number") {
    throw new TypeError("value must be a number");
  }
  if (typeof digits !== "number" || digits < 0 || digits > 20) {
    throw new RangeError("digits must be between 0 and 20");
  }

  const multiplier = Math.pow(10, digits);
  // 利用Math.round() 四舍五入，返回的是一个整数
  const rounded = Math.round(value * multiplier) / multiplier;

  const str = rounded.toString();
  const [integer, decimal = ""] = str.split(".");

  if (digits === 0) {
    return integer;
  }

  return `${integer}.${decimal}`;
}

// 测试代码
console.log("Right", toFixed(4.05, 1)); // 输出：'4.1' 正确
console.log(toFixed(3.14159, 2)); // 输出：'3.14'
console.log(toFixed(2.5, 0)); // 输出：'3'
console.log(toFixed(2.4, 0)); // 输出：'2'
console.log(toFixed(2.345, 2)); // 输出：'2.35'

// 原题
{
  // 参数解释: value 即数字，digits 要保留的小数位数
  function toFixed(value, digits) {
    // 返回四舍五入后的字符串
    const str = value.toString();

    let [a, b] = str.split(".");

    // 字符串不可变性：JavaScript中字符串是只读的，b[digits-1] = ... 这种赋值操作无效
    b = Array.from(b);

    if (b[digits] >= 5) {
      b[digits - 1]++;
    }

    let d = b.slice(0, digits).join("");

    return d.length > 0 ? a + "." + d : a;
  }
  // 测试代码
  // console.log("Wrong", (1.005).toFixed(2)); // 输出：'1.00' 四舍五入不精确
  console.log("Right", toFixed(4.05, 1)); // 输出：'4.1' 正确
  console.log("Right", toFixed(1.005, 2)); // 输出：'1.01' 正确
}
