/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  return arrNumber.sort();
}

function getTotal(arrNumber) {
  // code di sini
  var counter = 1; //inisialisasi counter
  var biggestNum = arrNumber[0]; //inisialisasi biggestNum

  if (arrNumber.length == 0) {
    //kalau array kosong
    return "";
  }
  for (let i = 1; i < arrNumber.length; i++) {
    //periksa satu per satu isi arrray
    if (arrNumber[i] > biggestNum) {
      //bila data array lebih besar dari biggestNum saat ini
      biggestNum = arrNumber[i]; //override
      counter = 1; //reset counter
    } else if (arrNumber[i] == biggestNum) {
      //bila data array adalah angka yang sama
      counter++; //counter bertambah 1
    }
  }
  return `angka paling besar adalah ${biggestNum} dengan jumlah kemunculan sebanyak ${counter} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
