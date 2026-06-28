// 7 Premitive Datatypes | nn bb ss u

// n = null, n = number
// b = bigint, b = boolean
// s = string, s = symbol
// u = undefined

let a = null;
let b = 15;
let c = BigInt("11111") + BigInt("11111");
let d = true;
let e = "Ehtisham";
let f = Symbol("I'm a Symbol");
let g // = undefined

console.log(a,b,c,d,e,f,g)

console.log(typeof c, typeof a)


// Non-Premitive Datatype | Objects = Key Value Pairs

const item = {
    'Ehtisham': true,
    "Hassan": false,
    "Khan": 23,
    "Meow": null,
    "Cat": undefined,
    Name: "Ehtisham"
}

item['Friend'] = "Ubaid";

console.log(item)

item["Cat"] = "Snobby";

console.log(item)
