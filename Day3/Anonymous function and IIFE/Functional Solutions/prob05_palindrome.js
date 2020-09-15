let arr = ['level', 'geeks', 'refer'];

var res = function (arr) {
  res = [];
  for (str of arr) {
    if (str == str.split('').reverse().join('')) {
      res.push(str);
    }
  }
  return res;
};

console.log(res(arr));