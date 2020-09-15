array = [7,8,9,4,5,6];
var oddNumber = function(array){
    var result = [];
    for (num of array){
        if(num%2 !== 0){
            result.push(num);
        }
    }
    return result;
}
console.log(oddNumber(array))