function pasanganTerbesar(num) {
    // you can only write your code here!
    let pair = 0;
    let arr = num.toString().split('');
    
    for (let i = 0; i < arr.length - 1; i++) {
      if (i === 0) pair = arr[i] + arr[i+1];
      if (pair < parseInt(arr[i] + arr[i+1])) pair = parseInt(arr[i] + arr[i+1]);
    }
    return parseInt(pair);
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99