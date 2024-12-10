//Exercise One
//Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
//Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do
console.log("Hello from JavaScript updated");

// Prompt the user for the amount of money they have
let money = prompt("How much money do you have?");

// Check if the user pressed "Cancel" (null) or entered a value
if (money !== null) {
  money = parseFloat(money); // Convert the input to a number

  // Provide suggestions based on the amount of money
  if (money < 10) {
    alert("You could grab a coffee or save a bit more!");
  } else if (money >= 10 && money < 50) {
    alert("Consider buying something small or saving for something bigger!");
  } else if (money >= 50 && money < 200) {
    alert("Maybe treat yourself to something nice or invest it!");
  } else if (money >= 200) {
    alert("You have enough to make a bigger purchase or invest wisely!");
  }
} else {
  alert("You canceled the prompt.");
}
