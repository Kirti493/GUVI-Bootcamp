var arr= [
    [['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
    [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]
];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];

    for(i=0; i<arr.length; i++){
        let temp = arr[i];
        let object = {}
        for(j=0; j<temp.length; j++){
            let key = temp[j][0];
            let value = temp[j][1];
            object[key] = value
        }
        tranformEmployeeList.push(object)
    }
    return tranformEmployeeList;
   }
   
   console.log(transformEmployeeData(arr))
