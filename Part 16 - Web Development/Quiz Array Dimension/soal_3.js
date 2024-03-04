/*
Minimum Distance Between Greatest Element

Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

function minDistanceBetweenGreatest(arr) {
    let maxNumber = arr[0];
    let maxIndices = [0];
  
    // Temukan nilai terbesar dan indeksnya
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        maxIndices = [i];
      } else if (arr[i] === maxNumber) {
        maxIndices.push(i);
      }
    }
  
    // Hitung minimum jarak antara nilai terbesar
    if (maxIndices.length <= 1) {
      return 0;
    }
  
    let minDistance = arr.length;
  
    for (let i = 0; i < maxIndices.length - 1; i++) {
      let distance = maxIndices[i + 1] - maxIndices[i];
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  
    return minDistance;
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0
