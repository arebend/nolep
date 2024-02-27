ES6 (ECMAScript 2015)
adalah versi dari bahasa pemrograman JavaScript yang menghadirkan banyak fitur baru dan peningkatan sintaksis. Salah satu peningkatan utama dalam ES6 adalah diperkenalkannya arrow function yang sangat bermanfaat dalam memanipulasi array.

Berikut adalah beberapa fitur ES6 dan contoh penggunaan array function:

Arrow Functions
Arrow functions adalah cara singkat untuk mendefinisikan fungsi dalam JavaScript. Mereka memiliki sintaks yang lebih pendek dan lebih mudah dibaca daripada fungsi biasa.

Contoh:
// Fungsi biasa
function multiply(a, b) {
  return a * b;
}

// Arrow function
const multiply = (a, b) => a * b;


Let dan Const
let dan const adalah pengganti var dalam ES6. let digunakan untuk mendeklarasikan variabel yang nilainya dapat diubah, sedangkan const digunakan untuk variabel yang nilainya tidak bisa diubah setelah dideklarasikan.

Contoh:
let x = 5;
x = 10; // Nilai x bisa diubah

const y = 20;
// y = 30; // Akan menyebabkan error, karena y nilainya tidak bisa diubah


Template Literals
Template literals memungkinkan Anda menyisipkan variabel atau ekspresi dalam string dengan menggunakan tanda backtick (`). Ini membuat penggabungan string dan variabel lebih mudah dibaca.

Contoh:
const name = 'John';
const age = 25;

const message = `Nama saya ${name} dan saya berusia ${age} tahun.`;
console.log(message);


Spread Operator dan Rest Parameter
Spread operator (...) dapat digunakan untuk menguraikan elemen array atau objek menjadi beberapa elemen terpisah. Rest parameter juga menggunakan sintaks yang serupa untuk mengumpulkan beberapa argumen menjadi sebuah array.

Contoh:
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5]; // Menambahkan elemen pada array

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6


Array Methods (Array Function)
Beberapa method baru diperkenalkan dalam ES6 untuk memanipulasi array dengan lebih efisien.

Contoh:
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // Menghasilkan [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0); // Menghasilkan [2, 4]

const sum = numbers.reduce((total, num) => total + num, 0); // Menghasilkan 15


Itu adalah beberapa fitur ES6 beserta contoh array function-nya. Masih ada banyak lagi Function" ES6, nah disini kalian sudah mulai belajar habbit explore (phase 1 habbit) . Coba pelajarin ES6 lainnya selain dari materi ini.

EXPLORE RESOURCES:
W3SCHOOL : https://www.w3schools.com/js/js_es6.asp
javatpoint : https://www.javatpoint.com/es6
MDN : https://developer.mozilla.org/en-US/docs/Web/JavaScript
W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
Image

www.javatpoint.com
ES6 Tutorial - javatpoint
ES6 Tutorial with What is ES6, History of ES6, ES6 Versions, ES6 Loops, Environment Setup, ES6 Syntax, ES6 Operators, ES6 Variables, ES6 Functions, ES6 Cookies, ES6 Strings, ES6 Math etc.
JavaScript | MDN
JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threade...
JavaScript | MDN


https://youtube.com/playlist?list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-