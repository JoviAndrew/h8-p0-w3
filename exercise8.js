function pasanganTerbesar(num) {
    // you can only write your code here!
    let stringNum = num.toString();
    let result = 0;

    for(let counter = 0; counter<stringNum; counter++){
        let temp = '';
        if(stringNum[counter+1] !== undefined){
            temp = stringNum[counter]+stringNum[counter+1];
            let numberTemp = Number(temp);

            if(numberTemp > result){
                result = numberTemp;
            }
        }
    }
    return result;

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99