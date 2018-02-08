function palindrome(kata) {
    // you can only write your code here!
    let counter = kata.length;
    let counterResult = 0;
    let newKata = '';

    while(counter > 0){
        newKata += kata.substring(counter-1, counter);
        counter--;
    }

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