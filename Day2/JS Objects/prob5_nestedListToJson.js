var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    var object = {};
        for(let i=0; i<arr.length; i++){
            object[arr[i][0]] = arr[i][1]
        }
        return object

}
console.log(fromListToObject(arr))