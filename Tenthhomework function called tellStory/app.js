//Create a function called tellStory()
//The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )1
//The function should return one big string with a story made from the arguments
//Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
//The value that is returned from the function should be printed in the console or in alert

function tellStory([name, mood, activity]) {
  // Create the story string by using the arguments in the specified format
  let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

  // Output the story in the console or using alert
  console.log(story); // or use alert(story) to show it in an alert box
}

// Example usage:
let storyDetails = ["Alice", "happy", "reading books"];
tellStory(storyDetails); // Output: This is Alice. Alice is a nice person. Today they are happy. They are reading books all day. The end.
