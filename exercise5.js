function balikString(kata){
    let result = '';

    let counter = kata.length;
    let counterResult = 0;
    
    while(counter > 0){
     result += kata.substring(counter-1, counter);
     counter--;
    }

    return result;
}

function palindrome(kata) {
    // you can only write your code here!
    var newKata = balikString(kata);

    if(kata === newKata){
        return true;
    }else{
        return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false