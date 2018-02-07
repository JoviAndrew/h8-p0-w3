function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let kelompok1 = [];
    let kelompok2 = [];
    let kelompok3 = [];
    let result = [];

    for(let counter=0; counter<arr.length; counter++){
        if(arr[counter] % 2 === 0 && arr[counter] % 3 !== 0){
            kelompok1.push(arr[counter]);
        }else if(arr[counter] % 2 !== 0 && arr[counter] % 3 !== 0){
            kelompok2.push(arr[counter]);
        }else{
            kelompok3.push(arr[counter]);
        }
    }
    result.push(kelompok1, kelompok2, kelompok3);
    return result;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]