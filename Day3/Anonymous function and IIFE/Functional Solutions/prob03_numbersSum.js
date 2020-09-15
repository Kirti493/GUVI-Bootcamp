array = [1,2,3,4,5];
var sum = function (array){
    let result = 0;
    for(nums of array){
        result += parseInt(nums)
    }
    return result;
}
console.log(sum(array))