const prompt = require("prompt-sync")();

// // let a = prompt("Enter your age: ");
// // console.log(a);

// // a = Number.parseInt(a); //Converting string to a number

// // console.log(typeof a);

// // if (a > 0) {
// //   console.log("This is a valid age");
// // }

// let age;

// age = prompt("Enter Your age: ");
// if (age < 0) {
//   console.log("This is an invalid age.");
// } else if (age > 0 && age <= 9) {
//   console.log("You are a kid.");
// } else if (age > 9 && age < 18) {
//   console.log("You are under 18.");
// } else {
//   console.log("You can drive as you are above 18.");
// }

const fruit = prompt("Enter fruit name: ").toLowerCase();

switch (fruit) {
  case "apples":
    console.log("Apples are Rs 200 per kg");
    break;
  case "bananas":
    console.log("Bananas are Rs 250 per dozen");
    break;
  case "melons":
    console.log("Melons are Rs 80 per kg");
    break;
  case "mangoes":
    console.log("Mangoes are Rs 300 per kg");
    break;
  default:
    console.log("This fruit is not available.");
}

let age = prompt("Enter your age: ");
let a = age > 18 ? "You can drive" : "You cannot drive";
console.log(a);
