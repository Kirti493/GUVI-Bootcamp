function lessThan100(num1,num2) {
    var sum = num1 + num2;
    if(sum < 100){
        return true;
    }
    else{
        return false;
    }
}
var res = lessThan100(22,15)
console.log(res)