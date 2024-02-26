/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .includes
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here

  // Base case: if the string is empty, return 0
  if (sentences.length === 0) {
    return 0;
  }

  // Convert the first character to lowercase for uniformity
  const firstChar = sentences[0].toLowerCase();

  // Function to check if a character is a vowel
  function isVowel(char) {
    return (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    );
  }

  // Check if the first character is a consonant (alphabetic and not a vowel)
  const isConsonant =
    firstChar >= "a" && firstChar <= "z" && !isVowel(firstChar);

  // Recursive call on the rest of the string, adding 1 if the first character is a consonant
  return (
    (isConsonant ? 1 : 0) + consonantCounterRecursive(sentences.substring(1))
  );
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
