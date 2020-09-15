arr = [2,8,6,7,13];
(function (arr){
    let result = [];
    for(i=0; i<arr.length; i++){
        counter = 0;
    for(j=2; j<arr[i]; j++){
        if(arr[i] % j == 0){
            counter = 1;
            break;
        }
    }
    if (counter == 0) {
        result.push(arr[i]);
      }

    }
    console.log(result);
  })(arr);
