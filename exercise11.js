function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let initialInterval = arr[1] - arr[0];
    let condition = false;

    for(let counter = 1; counter<arr.length; counter++){
        if(arr[counter] === arr[counter-1]+initialInterval){
            condition = true;
        }else{
            condition = false;
        }
    }

    return condition;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false