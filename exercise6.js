function angkaPalindrome(num) {
    // you can only write your code here!
    let result =  num;
    let exit = false;
    let i=0;
    let stringResult = num.toString();
    let indexDecrement = stringResult.length-1;

    while(!exit){
      stringResult = result.toString();
        if(stringResult[i] !== stringResult[indexDecrement]){
            result++;            
        }else if(result<10){
            result++;
            exit = true;
            
        }else{
            exit = true;
        }

    }
    return result;
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001