/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  const vokal = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  const arr = str.split("");
  for (let i = 0; i < vokal.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === vokal[i]) {
        arr[j] = String.fromCharCode(arr[j].charCodeAt() + 1);
      }
    }
  }
  return reverseWord(arr.join(""));
}

function reverseWord(str) {
  //code di sini
  const arr = str.split("");
  const reverse = [];
  for (let i = arr.length + 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return setLowerUpperCase(reverse.join(""));
}

function setLowerUpperCase(str) {
  //code di sini
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      arr[i] = arr[i].toUpperCase();
    } else if (arr[i] !== arr[i].toLowerCase()) {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return removeSpaces(arr.join(""));
}

function removeSpaces(str) {
  //code di sini
  const arr = str.split(" ");
  return arr.join("");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  return changeVocals(name);
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
