/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  //code here
  // Base case: If the string is empty, return an empty string
  if (data.length === 0) {
    return "";
  }

  // Determine the current character to be processed
  const currentChar = data[0];

  // Determine the replacement character based on 'jenis'
  let replacementChar;
  if (jenis === "ganjil") {
    // Replace even numbers with 'x'
    replacementChar = parseInt(currentChar) % 2 === 0 ? "x" : currentChar;
  } else {
    // Replace odd numbers with 'x'
    replacementChar = parseInt(currentChar) % 2 !== 0 ? "x" : currentChar;
  }

  // Recursive call on the remaining substring and prepend the replacement character
  return replacementChar + changeXRecursive(data.substring(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
