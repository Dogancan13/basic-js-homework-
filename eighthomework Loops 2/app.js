//Write a JavaScript function that will return:
//The sum of the MAX and MIN numbers from an array with numbers
//Ex: arr = [3, 5, 6, 8, 11]
//Output: Max: 11, Min: 3, Sum: 14

function sumOfMaxAndMin(arr) {
  // Filter out non-numeric values (keep only numbers)
  let numbers = arr.filter((item) => typeof item === "number");

  // Check if there are no numbers in the array
  if (numbers.length === 0) {
    return "No valid numbers in the array.";
  }

  // Find the maximum and minimum values from the filtered array
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  // Calculate the sum of the max and min values
  let sum = max + min;

  // Return the result
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

// Example usage:
let arr = [1, 2, "apple", true, 7, undefined, 9, null, 4];
console.log(sumOfMaxAndMin(arr)); // Output: Max: 9, Min: 1, Sum: 10
