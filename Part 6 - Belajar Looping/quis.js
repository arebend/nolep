// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
// tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
let i = 0;
while (i < 20) {
  i += 2;
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
let j = 20;
while (j > 0) {
  console.log(j + " - I will become fullstack developer");
  j -= 2;
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log("LOOPING PERTAMA");
for (let i = 0; i < 20; i++) {
  console.log(i + 1 + " - I love coding");
}

console.log("LOOPING KEDUA");
for (let i = 20; i > 0; i--) {
  console.log(i + " - I will become fullstack developer");
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
for (let i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
      console.log(i + " KELIPATAN 3");
    }
  }
  
  for (let i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
      console.log(i + " KELIPATAN 6");
    }
  }
  
  for (let i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
      console.log(i + " KELIPATAN 10");
    }
  }

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log("kelipatan 3 dengan pertambahan 2");
for (i = 1; i < 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`${i} kelipatan 3`);
  }
}

console.log("");

// kelipatan 6 dengan pertambahan 5
console.log("kelipatan 6 dengan pertambahan 5");
for (i = 1; i < 100; i += 5) {
  if (i % 6 === 0) {
    console.log(`${i} kelipatan 6`);
  }
}

console.log("");

// kelipatan 10 dengan pertambahan 9
console.log("kelipatan 10 dengan pertambahan 9");
for (i = 1; i < 100; i += 9) {
  if (i % 10 === 0) {
    console.log(`${i} kelipatan 10`);
  }
}