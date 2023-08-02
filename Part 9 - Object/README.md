Pada pertemuan kali ini, kalian akan belajar apa itu object pada javascript.
Objek adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).

object itu seperti berikut
let myObj = {
  myKey: 'myValue'
};

lengkapnya seperti ini
const myObj = {
  nama: 'bryan',
  kelas: '12',
  hobbi: ['main', 'makan', 'tidur'],
  detail: {
    tinggi: 185,
    berat: 60
  }
};

Cara akses object bisa seperti ini
console.log(myObj)
console.log(myObj.nama)
console.log(myObj.kelas)
console.log(myObj.hobbi[1])
console.log(myObj.detail.tinggi)
const detail = myObj.detail;

console.log(detail.berat)

Cara memanipulasi isi object
myObj.kelakuan = 'baik';
//atau bisa seperti ini
myObj['isNolep'] = true;

//atau dengan loop
let objAngka = {};
for (let i = 1; i <= 3; i++) {
  objAngka[i] = i
}
console.log(objAngka)

Cara menghapus tipe data object
delete myObj.isNolep; //atau delete myObj['isNolep'];

Loop khusus untuk tipe data object
for (const key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
}


Yah kira kira begitu lah yak hehe
---------------------------------------
video tentang object

https://youtu.be/pCYUrbRRRXQ