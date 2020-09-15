let arr1 = [85,24,63,29,74];
let arr2 = [90,6,22];
var arrayMedian = function(arr11,arr2){
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a,b) => {
        return a - b;
    });
    let mid = sortedArray.length / 2;
    if (sortedArray.length % 2 !== 0) {
        return sortedArray[mid];
      } else {
        return sortedArray[mid - 1] + sortedArray[mid] / 2;
      }
    };
    
    console.log(medianOfSorted(ar1, ar2));
