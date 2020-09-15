var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
  positiveSum = 0;
  negativeSum = 0;
  for (num of arr) {
    if (Math.sign(num) === 1) {
      positiveSum += num;
    } else {
      negativeSum += num;
    }
  }
  return [positiveSum , negativeSum]
};
console.log(countPositivesSumNegatives(arr));