pada part kali ini kita akan belajar apa itu function pada javascript ya

fungsi itu semacam block of code yang isinya proses tertentu, misal ada fungsi balikKata ya fungsi tersebut memproses untuk membalikan suatu kata

perlu di ingat, bahwa fungsi itu bisa mengembalikan nilai dan bisa tidak mengembalikan nilai (kalo kata penulis itu mengembalikan nilai = punya nilai)

function test1() {
  return "woi"; // ini fungsi yang punya nilai
}

function test2() {
  console.log("woi"); //ini ga punya nilai tapi dia bisa ngasih output
  //karena ada perintah console.log()
}


lalu cara menjalankan fungsi seperti berikut

test1(); //ini menjalankan karena ada ()
test1 //ini ngapain njir????


kalian bebas nentuin mau berapa parameter untuk fungsi yang kalian buat
function ntahApaIni(a,b,c,d) {
  //suka suka kalian lah disini mau apa
}

ntahApaIni(1,2,3,4,5)
//kok ada 5, kan d itu sampe 4, sedangkan 5 itu ga ada di parameter?
//tenang saja angka 5 ga akan dianggap

point penting dalam belajar function
teliti dalam penentuan parameter mau tipe data apa aja
jangan lupa kasih () buat jalanin fungsinya
penamaan fungsi harus jelas
penamaan parameter juga harus jelas

------------------------------------------------------

vid untuk pemahaman fungsi, yang mungkin kalian butuh, apalagi di menit menit akhir itu ada contoh kompleksnya:

https://youtu.be/qaHT0psosU0