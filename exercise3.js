var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arrayInput){
    arrayInput.splice(1,1, arrayInput[1]+' Elsharawy');
    arrayInput.splice(2, 1, 'Provinsi '+arrayInput[2]);
    arrayInput.splice(4, 1, 'Pria', 'SMA International Metro');
    return arrayInput;
}


console.log(dataHandling2(input));

/*Result: 
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"] 
*/