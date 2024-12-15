//When given any array of strings (should work with array with any number of elements)
//It will create one big string and return it
//Ex:["Hello", "there", "students", "of", "SEDC", "!"]
//Result: "Hello there students of SEDC!"

function joinStrings(arr) {
  return arr.join(" ");
}

// Example usage
const wordsArray = ["Hello", "there", "students", "of", "SEDC", "!"];
const result = joinStrings(wordsArray);

// Output the result
console.log(result);
alert(result);
