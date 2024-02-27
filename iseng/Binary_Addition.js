function addBinary(a, b) {
  // Convert decimal numbers to binary
  const binaryA = a.toString(2);
  const binaryB = b.toString(2);

  // Calculate the sum of binary numbers
  const sumDecimal = a + b;
  const sumBinary = sumDecimal.toString(2);

  return sumBinary;
}
console.log(addBinary(1, 2));
console.log(addBinary(2, 3));
console.log(addBinary(3, 4));
