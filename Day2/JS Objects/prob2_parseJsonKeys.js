var obj = { name: 'RajiniKanth', age: 33, hasPets: false };
function printAllKeys(obj) {
    let array = [];
     for(const element in obj){
         array.push(`${element}`)
     }
        return array;
   }
   console.log(printAllKeys(obj))