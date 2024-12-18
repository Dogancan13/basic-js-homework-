const dog = {
  name: "Dog", // Property: name
  kind: "Mammal", // Property: kind

  speak: function (message) {
    // Method: speak
    console.log(`${this.name} says: '${message}'`);
  },
};

// Example usage
dog.speak("Hey bro!!!"); // Output: "Dog says: 'Hey bro!!!'"
