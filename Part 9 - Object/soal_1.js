function changeMe(arr) {
  // you can only write your code here!
  var nama = "";
  var temp = {};
  for (var i = 0; i < arr.length; i++) {
    nama = i + 1 + ". " + arr[i][0] + " " + arr[i][1] + ":";
    temp["firstname"] = arr[i][0];
    temp["lastname"] = arr[i][1];
    temp["gender"] = arr[i][2];
    if (arr[i][3] == undefined) {
      temp["age"] = "invalid Birth Year";
    } else {
      temp["age"] = Number(new Date().getFullYear() - arr[i][3]);
    }
    console.log(nama);
    console.log(temp);
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]); 
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
//   Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
