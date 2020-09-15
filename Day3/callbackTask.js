function arithematic(operationIdx , operationArray){
    var num1 = 50;
    var num2 = 80;
    return operationarray[operationIdx](num1 , num2)
}
function add(x,y){
    return num1 + num2;
}
function sub(x,y){
    return num1 - num2;
}
function mul(x,y){
    return num1 * num2;
}
function div(x,y){
    return num1 / num2;
}
let operationArray = [add,sub,mul,div]

for(operation in operationArray){
    console.log(arithematic(operation , operationArray))
}