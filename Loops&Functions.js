const prompt = require("prompt-sync")();
/*
// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }

// let num = 5; //prompt("Enter a number: ");
// let fac = 1;
// for (let i = 1; i <= num; i++) {
//   fac *= i;
// }
// console.log(fac);

// for-in loop

let obj = {
  Ehtisham: 15299,
  Ubaid: 15291,
  Usman: 15426,
};

for (let a in obj) {
  console.log("ID of " + a + " is " + obj[a]);
}

// for-of loop (mainly used for arrays)

// for (let b of "Ehtisham") {
//   console.log(b);
// }

// // While Loop
// let n = prompt("Enter a number: ");
// n = Number.parseInt(n);

// let i = 0;
// while (i <= n) {
//   console.log(i);
//   i++;
// }

// do-while

let x = prompt("Enter a number: ");
x = Number.parseInt(x);

let i = 1;

do {
  console.log(i);
  i++;
} while (i < x);

*/

// Functions:

function sum(x, y) {
  return x + y;
  console.log("Done");
}
let a = 2,
  b = 67;

console.log("The sum of a + b is: ", sum(a, b));

const hello = () => {
  console.log("Hey.");
};

hello();

const average = (p, q) => {
  return (p + q) / 2;
  console.log("Done");
};

let p = 23,
  q = 47;

console.log("The average of p + q is: ", average(p, q));

let marks = {
  Ehtisham: 95,
  Ubaid: 80,
  Usman: 79,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]],
  );
}

// Using for-in loop

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}
