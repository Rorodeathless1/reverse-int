module.exports = function reverse(n) {
  const num = Math.abs(n);
  const str = num.toString();
  const arr = str.split('');
  const reversedArr = arr.reverse();
  const revetsedStr = reversedArr.join('');
  const reversedNum = +revetsedStr;

  return reversedNum;
};
