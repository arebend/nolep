function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase(); //Convert Text to Lowercase:
  console.log("text_1", text);
  text = text.replace(/[^a-z]/g, ""); //Remove Non-Alphabetic Characters:
  console.log("text_2", text);

  const positions = [];
  for (let i = 0; i < text.length; i++) {
    //Loop Through Each Character:
    const char = text[i];
    const charPosition = alphabet.indexOf(char) + 1; //Find Position of Each Letter:
    positions.push(charPosition);
  }
  console.log("positions", positions);

  const result = positions.join(" ");
  console.log('result',result);
  return result;

  //   return text
  //     .toLowerCase() // Convert to lowercase to handle both uppercase and lowercase letters
  //     .replace(/[^a-z]/g, "") // Remove non-alphabetic characters
  //     .split("")
  //     .map((char) => alphabet.indexOf(char) + 1)
  //     .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight."));
//  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
