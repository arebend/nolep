/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  //code here
  const flattenedArray = arr.flat(); // Flatten the 2D array
  console.log("flattenedArray =>", flattenedArray);
  const minNum = Math.min(
    ...flattenedArray.filter((num) => typeof num === "number")
  ); // Find the minimum number
  const maxNum = Math.max(
    ...flattenedArray.filter((num) => typeof num === "number")
  ); // Find the maximum number
  console.log("minNum", minNum);
  console.log("maxNum", maxNum);
  const missingNumbers = [];

  for (let i = minNum; i <= maxNum; i++) {
    if (!flattenedArray.includes(i)) {
      console.log("i", i);
      missingNumbers.push(i);
    }
    console.log("missingNumbers", missingNumbers);
  }

  return missingNumbers;
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
