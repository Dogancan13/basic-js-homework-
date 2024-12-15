function combineNames(firstNames, lastNames) {
  return firstNames.map(
    (firstName, index) => `${index + 1}. ${firstName} ${lastNames[index]}`
  );
}

// Example usage:
let first = ["Bob", "Jill", "Alice"];
let last = ["Gregory", "Wurtz", "Johnson"];
let full = combineNames(first, last);

console.log(full);
