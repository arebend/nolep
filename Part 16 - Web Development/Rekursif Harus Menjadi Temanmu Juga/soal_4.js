/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
  //code here

  // Base case: if the array is empty, return an empty string
  if (array.length === 0) {
    return "";
  }

  // Check if the first element of the array is divisible by num
  const isDividable = array[0] % num === 0;

  // If it is, include it in the result, followed by a space
  if (isDividable) {
    // Make a recursive call with the rest of the array and add the current element to the result
    return array[0] + " " + dividableRecursive(array.slice(1), num);
  } else {
    // If it's not, just make a recursive call with the rest of the array
    return dividableRecursive(array.slice(1), num);
  }
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132
