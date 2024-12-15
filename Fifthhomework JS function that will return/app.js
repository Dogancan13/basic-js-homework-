//Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years

function humanToDogYears(humanYears) {
  return humanYears * 7;
}
let humanAge = 5;
let dogAge = humanToDogYears(humanAge);
console.log("Human age:", humanAge);
console.log("Dog age:", dogAge); // Output: Dog age: 35

function dogToHumanYears(dogYears) {
  return dogYears / 7; // Output: Human age: 5
}
