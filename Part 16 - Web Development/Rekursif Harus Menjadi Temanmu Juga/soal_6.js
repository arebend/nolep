/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  //lalu bandingkan dengan sentence

  if (sentence.length <= 1) {
    return true;
  }

  // Remove spaces for phrases
  sentence = sentence.replace(/ /g, "");

  // Compare the first and last characters
  if (
    sentence[0].toLowerCase() === sentence[sentence.length - 1].toLowerCase()
  ) {
    // If they match, perform a recursive call on the substring excluding these two characters
    return palindromeRecursive(sentence.substring(1, sentence.length - 1));
  } else {
    // If the first and last characters do not match, it's not a palindrome
    return false;
  }

  if (sentence.length <= 1) {
    return true;
  }

  // if (sentence[0] !== sentence[sentence.length - 1]) {
  // 	return false;
  // } else {
  // 	return palindromeRecursive(sentence.slice(1, -1));
  // }
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
