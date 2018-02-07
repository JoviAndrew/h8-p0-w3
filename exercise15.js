function groupAnimals(animals) {
    // you can only write your code here!

    let usedInitial = [];
    let result = [];

    //For each element, check!
    animals.forEach(element => {
        // checking initial character
        let initialChar = element.charAt(0);

        // check if initialChar has been used previously
        if(usedInitial.includes(initialChar)) return;

        // if initialChar is new, register it as used
        usedInitial.push(initialChar);

        // filter by initial
        let group = animals.filter( (value) => (value.charAt(0) === initialChar));
        result.push(group);

    });
    result.sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0));
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]