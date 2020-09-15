function getPositives(ar)
{
let ar2 =[];
 for (num of ar){
     if(Math.sign(num) === 1){
        ar2.push(num)
     }
 }
 return ar2;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);