console.log("Operators in JS");

// Arithmetic Operators:

let a = 25;
let b = 40;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a**b = ", a ** b);
console.log("a % b = ", a % b);
console.log("a++ = ", a++);
console.log("a = ", a);
console.log("a-- = ", a--);
console.log("a = ", a);

// ++a and --a increment and then print.

// Assignment Operators:
// =, +=, -=, *=, /=, %=, **=

let as = 1;
as += 6; // as = as + 6;
console.log(as);

// Comparison Operators:
// ==, !=, ===, !==, <, >, <=, >=, ?

let comp1 = 2;
let comp2 = "2";
console.log("Comp1 == Comp2 is", comp1 == comp2);
console.log("Comp1 != Comp2 is", comp1 != comp2);
console.log("Comp1 === Comp2 is", comp1 === comp2); //Answer is false as the datatype is change despite being the same values

let age = 21;
if (age !== 18) {
  console.log("You are not 18.");
} else {
  console.log("You are 18.");
}

// Logical Operators:
// &&, ||, !

let x = 5;
let y = 7;

console.log(x < y && x == 5);
console.log(x > y || x != 5);
console.log(!false);
