array = [1, 2, 3, 4, 5];

(function (array){
    let result = 0;
    for(nums of array){
        result += parseInt(nums);
    }
    console.log(result);
})(array);