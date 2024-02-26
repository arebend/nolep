/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
  //CODE HERE
  var result = {}; // Initialize an empty object to hold the result
  for (var i = 0; i < studentsArr.length; i++) {
    var initial = studentsArr[i][0]; // Get the first letter of the current name
    if (!result[initial]) {
      result[initial] = [studentsArr[i]]; // If this initial is not yet a key in the result, add it with the current name as the first element of an array
    } else {
      result[initial].push(studentsArr[i]); // If this initial is already a key, push the current name to the corresponding array
    }
  }
  return result; // Return the grouped object
}
console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
  {
    B: [ 'Budi', 'Badu' ],
    J: [ 'Joni', 'Jono' ]
  }
  */
console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
  {
    M: [ 'Mickey' ],
    Y: [ 'Yusuf' ],
    D: [ 'Donald' ],
    A: [ 'Ali' ],
    G: [ 'Gong' ]
  }
  */
console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
  {
    R: [ 'Rock', 'Rocker' ],
    S: [ 'Stone', 'Sticker' ],
    B: [ 'Brick' ]
  }
  */
