//Write a function that will take an array of 5 numbers as an argument and return the sum.
//Print it in the console or in alert
//BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function validateNumber(num) {
  return !isNaN(num) && num !== ""; // Checks if the value is a number and not empty
}

// Function to calculate the sum of an array of 5 numbers
function calculateSum(numbers) {
  // Validate each number in the array
  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      // If any number is invalid, show an error message and stop the calculation
      alert(
        `Error: Invalid number at index ${i + 1}. Please provide valid numbers.`
      );
      return; // Exit the function
    }
  }

  // If all numbers are valid, calculate the sum
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Output the result in the console or an alert
  console.log(`The sum is: ${sum}`);
  alert(`The sum is: ${sum}`);
}

// Example usage with different input
const numbersArray = [5, 8, 12, "hello", 15]; // Example with an invalid value "hello"
calculateSum(numbersArray);
