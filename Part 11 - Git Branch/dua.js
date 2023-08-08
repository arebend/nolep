/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  //your code here
  let arrSplitHero = str.split(",");
  let arrSplitType = [];
  let arrRanged = [];
  let arrMelee = [];

  for (let i = 0; i < arrSplitHero.length; i++) {
    arrSplitType.push(arrSplitHero[i].split("-"));
  }

  for (let j = 0; j < arrSplitType.length; j++) {
    if (arrSplitType[j][1] === "Ranged") {
      arrRanged.push(arrSplitType[j][0]);
    } else if (arrSplitType[j][1] === "Melee") {
      arrMelee.push(arrSplitType[j][0]);
    }
  }

  return [arrRanged, arrMelee];
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // [ [], [] ]
