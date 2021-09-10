let input = "tuprentine and turtles";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (let vowelCheck = 0; vowelCheck < vowels.length; vowelCheck++) {
    if (input[inputIndex] === vowels[vowelCheck]) {
      resultArray.push(input[inputIndex]);
    }
  }
  if (input[inputIndex] === "e" || input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }
}
console.log(resultArray.join("").toUpperCase());
