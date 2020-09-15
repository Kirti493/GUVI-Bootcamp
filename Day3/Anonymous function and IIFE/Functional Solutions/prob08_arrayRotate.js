let arr = [5, 16, 19, 36, 48];
let n = 2;

rotateArray = function (arr, n) {
  return arr.slice(n).concat(arr.slice(0, n));
};

console.log(rotateArray(arr, n));