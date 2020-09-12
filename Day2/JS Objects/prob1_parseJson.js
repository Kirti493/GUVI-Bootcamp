var obj = { name: 'RajiniKanth', age: 33, hasPets: false };
function printAllValues(obj) {
    let array = [];
    for(element in obj){
        array.push(`${JSON.stringify(obj[element])}`)
    }
    return array
}
console.log(printAllValues(obj))