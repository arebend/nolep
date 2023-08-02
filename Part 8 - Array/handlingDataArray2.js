// pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull loh
let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {

  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");

  const name = input[1];
  const month = input[3].split("/")[1];
  const dateArr = input[3].split("/");

  dateArr.sort(function (a, b) {
    return b - a;
  });
  
  const dateString = input[3].split("/").join("-");

  switch (parseInt(month)) {
    case 1:
      monthName = "Januari";
      break;
    case 2:
      monthName = "Febuari";
      break;
    case 3:
      monthName = "Maret";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "Mei";
      break;
    case 6:
      monthName = "Juni";
      break;
    case 7:
      monthName = "Juli";
      break;
    case 8:
      monthName = "Agustus";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "Oktober";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "Desember";
      break;
    default:
      monthName = "Tidak ada bulan yang lebih dari 12";
      break;
  }

  console.log('- ', input);
  console.log('- ',monthName);
  console.log('- ',dateArr);
  console.log('- ',dateString);
  console.log('- ',name);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
