/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here

  // Convert the number to a string for easy manipulation
  let numStr = equation.toString();

  // Base case: if the string length is 1, return the string itself
  if (numStr.length === 1) {
    return numStr;
  }

  // Take the first digit and append the necessary number of zeros
  let part = numStr[0] + "0".repeat(numStr.length - 1);

  // Recursive call with the rest of the number, excluding the first digit
  let rest = parseNumber(parseInt(numStr.substring(1)));

  // If the rest part starts with '0', it means there are no more significant digits to add, so we don't include it in the result
  if (rest.startsWith("0")) {
    return part;
  }

  // Concatenate the current part with the result of the recursive call
  return part + "+" + rest;
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
