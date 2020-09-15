function powersOfTwo(n){
    let res = [];
    for(i=0; i<=n; i++){
    res.push(Math.pow(2,i));
    }
    return res;
  }
  console.log(powersOfTwo(2))