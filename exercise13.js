function targetTerdekat(arr) {
    // you can only write your code here!
    let counterX = 0;
    let counterO = 0;
    let result = 0;
    let temp1 = 0;
    let temp2 = 0;

    for(counter = 0; counter<arr.length; counter++){
        if(counterO !== 0 && counterX !== 0){
            if(temp2 > temp1){
                result = temp2-temp1;
                return result;
            }else if(temp1 > temp2){
                result = temp1 - temp2;
                return result;
            }
        }else{
            if(arr[counter] === 'o'){
                counterO++;
                temp1 = counter;
            }else if(arr[counter] === 'x'){
                counterX++;
                temp2 = counter;
            }else{
                continue;
            }
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2 