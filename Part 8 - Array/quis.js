/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let tmpO = 0;
  let tmpX = [];
  let result;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] === "o") {
      tmpO += i;
    } else if (arr[i] === "x") {
      tmpX.push(i);
    }
  }
  if (tmpX.length > 0) {
    for (let i = 0; i < tmpX.length; i++) {
      if (tmpO > tmpX[i]) {
        result = tmpO - tmpX[tmpX.length - 1];
      } else {
        result = Math.abs(tmpX[0] - tmpO);
      }
    }
  } else {
    return 0;
  }
  return result;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var arrTampung = [[], [], []];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      //jika array kelipatan 3
      arrTampung[2].push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      //jika array kelipatan 2(angaka genap)
      arrTampung[0].push(arr[i]);
    } else {
      //jika array kelipatan 1
      arrTampung[1].push(arr[i]);
    }
  }
  return arrTampung;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  var sort = animals;
  var sementara = [];
  var display = [];

  // SORTING ANIMALS
  for (i = 0; i < sort.length; i++) {
    for (j = 0; j < sort.length; j++) {
      if (sort[j] > sort[j + 1]) {
        var tmp = sort[j];
        sort[j] = sort[j + 1];
        sort[j + 1] = tmp;
      }
    }
  }
  // SORTING ARRAY
  var huruf = sort[0][0];
  for (var i = 0; i < animals.length; i++) {
    if (sort[i][0] === huruf) {
      sementara.push(animals[i]);
    } else {
      display.push(sementara);
      sementara = [];
      huruf = sort[i][0];
      sementara.push(animals[i]);
    }
    if (i === animals.length - 1) {
      display.push(sementara);
    }
  }

  return display;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
