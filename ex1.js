const prompt = require("prompt-sync")();

let x = Math.floor(Math.random() * 100) + 1;
let y;
let attempts = 0;

while (x !== y) {
  y = prompt("Enter a Number: ");
  y = Number.parseInt(y);

  if (isNaN(y)) {
    console.log("❌ Please enter a valid number.");
    continue;
  }

  attempts++;

  if (y === x) {
    console.log("🎉 You guessed the right number!");
    console.log("You guessed it in " + attempts + " attempts.");
  } else if (y > x) {
    console.log("📉 Guess lower!");
  } else {
    console.log("📈 Guess higher!");
  }
}
