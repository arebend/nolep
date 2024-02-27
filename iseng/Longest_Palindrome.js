function longestPalindrome(str) {
  //Good Luck
  // Step 1: Create a frequency map
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase(); // Convert to lowercase for case-insensitivity
    // Check if the character is alphanumeric
    if (/[a-z0-9]/.test(char)) {
      if (charCount[char] === undefined) {
        charCount[char] = 1;
      } else {
        charCount[char]++;
      }
    }
  }
//   const charCount = new Map();
//   for (const char of str.toLowerCase()) {
//     if (/[a-z0-9]/.test(char)) {
//       charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
//   }

  // Step 2-6: Calculate the length of the longest palindrome
  let length = 0;
  let hasOddCount = false;

  for (const count of charCount.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      length += count - 1; // Use even count for the pair
      hasOddCount = true;
    }
  }

  // Add 1 for a single character with odd count if present
  if (hasOddCount) {
    length += 1;
  }

  return length;
}

console.log(longestPalindrome("Hannah")); //6
console.log(longestPalindrome("aabbcc_yYx_")); //9
console.log(longestPalindrome("xyz__a_/b0110//a_zyx")); //13
console.log(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_")); //25
