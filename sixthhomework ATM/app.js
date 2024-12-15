//The ATM should give cash
//Should return "Not enough money" if you request more money
//Should return the ammount withdrawn and money left on the account if you have enough
//Note: Hardcode your account money in the program
//Bonus: Make it work with prompt()!

let accountBalance = 1000;

function atmWithdrawal() {
  // Prompt the user to enter the withdrawal amount
  let withdrawalAmount = parseFloat(
    prompt("Enter the amount you want to withdraw:")
  );

  // Check if the withdrawal amount is greater than the account balance
  if (withdrawalAmount > accountBalance) {
    alert("Not enough money");
  } else {
    // Update account balance after withdrawal
    accountBalance -= withdrawalAmount;
    alert(
      `You have withdrawn $${withdrawalAmount}. Your new balance is $${accountBalance}.`
    );
  }
}

// Call the function to run the ATM
atmWithdrawal();
