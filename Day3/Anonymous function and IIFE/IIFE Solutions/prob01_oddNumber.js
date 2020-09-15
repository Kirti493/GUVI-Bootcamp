
array = [7,8,9,4,5,6];
(function(array){
    var result = [];
    for (num of array){
        if(num%2 !== 0){
            result.push(num);
        }
    }
    console.log(result);
})(array);