let arr = ['level', 'geeks', 'refer'];

(function (arr) {
  res = [];
  for (str of arr) {
    if (str == str.split('').reverse().join('')) {
      res.push(str);
    }
  }
  console.log(res);
})(arr);