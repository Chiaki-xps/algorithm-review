// js两个大数相加
// 1. BigInt
function bigNumberAdd(n, m) {
  const bigN = BigInt(n);
  const bigM = BigInt(m);

  return bigM + bigN;
}

// 2. 字符串相加
// 使用循环的方式
function addBigNumbers(num1, num2) {
  let result = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  //  最后一位的计算如果大于10，往前进一位，所以当 carry === 1的时候，需要继续计算
  while (i >= 0 || j >= 0 || carry !== 0) {
    const digI1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digJ2 = j >= 0 ? parseInt(num2[j]) : 0;

    const sum = digI1 + digJ2 + carry;

    const digSum = sum % 10;
    carry = Math.floor(sum / 10);

    result = digSum.toString() + result;

    i--;
    j--;
  }

  return result;
}

// const num1 = '1234';
// const num2 = '9';

const num1 = "123456789012345678901234567890";
const num2 = "987654321098765432109876543210";

const sum = addBigNumbers(num1, num2);
console.log(sum);
