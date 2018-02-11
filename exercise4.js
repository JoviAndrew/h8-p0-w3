var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arrayInput){
    arrayInput.splice(1,1, arrayInput[1]+' Elsharawy');
    arrayInput.splice(2, 1, 'Provinsi '+arrayInput[2]);
    arrayInput.splice(4, 1, 'Pria', 'SMA International Metro');
    
    console.log(arrayInput);

    //Get Month
    var tanggal = input[3].split('/');
    var bulan = parseInt(tanggal[1]);

    var bulanCharacter;

    switch(bulan){
        case 1:
            bulanCharacter = 'Januari';
            break;
        case 2:
            bulanCharacter = 'Februari';
            break;
        case 3:
            bulanCharacter = 'Maret';
            break;
        case 4:
            bulanCharacter = 'April';
            break;
        case 5:
            bulanCharacter = 'Mei';
            break;
        case 6:
            bulanCharacter = 'Juni';
            break;
        case 7:
            bulanCharacter = 'Juli';
            break;
        case 8:
            bulanCharacter = 'Agustus';
            break;
        case 9:
            bulanCharacter = 'September';
            break;
        case 10:
            bulanCharacter = 'Oktober';
            break;
        case 11:
            bulanCharacter = 'November';
            break;
        default:
            bulanCharacter = 'Desember';
            break;
    }
    console.log(bulanCharacter);
    console.log(tanggal.sort((a, b) => b-a));
    console.log(tanggal[1] + '-' + tanggal[2] + '-' + tanggal[0]);
    console.log(input[1].slice(0, 14));
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */