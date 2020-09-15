function getNthElement(array,n){
        if(array.length == 0){
            return;
        }
        else{
            return array[n]
        }
   }
   console.log(getNthElement([1, 3, 5], 1))