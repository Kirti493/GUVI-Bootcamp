var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    array = [];
    for(const element in obj){
        array.push(`[${JSON.stringify(element)}, ${JSON.stringify(obj[element])}]`)
    }
    return array
}
console.log(convertListToObject(obj))