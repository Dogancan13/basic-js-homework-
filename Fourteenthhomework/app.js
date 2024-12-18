console.log("Book Reading Status");

let title = prompt("Enter the title of the book:");
let author = prompt("Enter the author of the book:");
let readingStatus = prompt("Have you read this book? (yes/no):");

// Convert readingStatus to boolean
let status = readingStatus === "yes";

// Create the book object
let book = {
  title: title,
  author: author,
  readingStatus: status,
  // Method to display the reading status
  displayStatus: function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  },
};
