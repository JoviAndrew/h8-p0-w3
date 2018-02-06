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

console.log(balikString('Hello World!'));
