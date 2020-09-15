var arr = [1, 2, 3];
var result = [];
function hourToSeconds(arr) {
    for(num of arr){
        result.push(num*3600)
    }
    return result;
}
var data = hourToSeconds(arr)
console.log(data)