// Template literals use backticks ` instead of quotes --- This is called string interpolation

let boy1 = "Ehtisham";
let boy2 = "Ubaid";

let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);

// Escape Sequence Characters

// Backslash "\", \n = new line, \t = tab, \r = carriage return

let fruit = "Bana'na"; // 'Bana\'na';
console.log(fruit);

let fruit2 = "Bana\nna";
console.log(fruit2);

let fruit3 = 'Bana"na'; // "Bana\"na";
console.log(fruit2);

let name = "Ehtisham";

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name[0]);
// console.log(name[1]);
// console.log(name.slice(1, 5));
// console.log(name.slice(3));
// console.log(name.replace("sham", "shamii"));

let friend = "Ubaid";

console.log(name.concat(" is a friend of " + friend + " Yes!"));

let friend2 = "        Usman         ";
console.log(friend2);
console.log(friend2.trim()); //  Removes extra spaces

for (let i = 0; i < friend.length; i++) {
  console.log(friend[i]);
}

console.log('Ehtisham"'.length);

let sen = "My name is Ehtisham";
let word = "Ehtisham";

console.log(sen.includes(word));
console.log(
  `The word '${word}' ${sen.includes(word) ? "is" : "is not"} in the sentence.`,
);

let n = "Name";

console.log(`The name ${n}`);

let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof amount);
