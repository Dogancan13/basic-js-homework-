//Third exercise
//Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in Formula for Chinese Zodiac caluclation

console.log("Hello from JavaScript updated");

// Prompt the user for a year input
let year = prompt("Enter a year to find out your Chinese Zodiac:");

if (year !== null && !isNaN(year)) {
  // Convert the input to a number
  year = parseInt(year);

  // Calculate the Chinese Zodiac index using the formula
  let zodiacIndex = (year - 4) % 12;

  // Chinese Zodiac names array
  const zodiacs = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];

  // Ensure the zodiac index is non-negative (handle negative years correctly)
  if (zodiacIndex < 0) {
    zodiacIndex += 12;
  }

  // Display the result
  alert(`The Chinese Zodiac for the year ${year} is: ${zodiacs[zodiacIndex]}`);
} else {
  alert("Please enter a valid year.");
}
