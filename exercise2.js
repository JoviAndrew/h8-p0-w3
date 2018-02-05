var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(arrayInput){
    for(let index1 = 0; index1<arrayInput.length; index1++){
        console.log('Nomor ID: '+arrayInput[index1][0]);
        console.log('Nama Lengkap: '+arrayInput[index1][1]);
        console.log('TTL: '+arrayInput[index1][2]+ ' '+ arrayInput[index1][3]);
        console.log('Hobi: '+arrayInput[index1][4]);
        console.log(''); //To give space after the first data
    }
}

dataHandling(input);