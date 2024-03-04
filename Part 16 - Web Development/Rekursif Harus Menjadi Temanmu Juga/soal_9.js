/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `virus` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  virus: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  virus: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

function virusCheckRecursive(str, viruses) {
  //code here

  // Base case: if str is empty, return 0; if viruses is undefined or empty, return 'There is no virus'
  if (viruses === undefined || viruses.length === 0 || str.length === 0) {
    return "There is no virus";
  }

  // Remove '|' from viruses to create a list of virus characters
  const cleanedViruses = viruses.replace(/\|/g, "");

  // Initialize count for this level of recursion
  let count = 0;

  // Check if the current character in str matches any character in cleanedViruses
  if (cleanedViruses.includes(str[0].toLowerCase())) {
    count = 1; // Found a match, increment count
  }

  // Base case for recursion: if str has only one character, return the count for this level
  if (str.length === 1) {
    return count;
  }

  // Recursive call: check the rest of the string and add to count
  return count + virusCheckRecursive(str.substring(1), cleanedViruses);
}

console.log(virusCheckRecursive("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(virusCheckRecursive("HH0NBP1zRa", "h|r")); // 3
console.log(virusCheckRecursive("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(virusCheckRecursive("mjBgPlzks", "m")); // 1
console.log(virusCheckRecursive("AIn4Ks05bBaa", "x")); // 0
console.log(virusCheckRecursive("RsMFjBUjvIaP")); // There is no virus
console.log(virusCheckRecursive("")); // There is no virus
