// let arr = [1, 2, 3, 4, 5, 6, 7, null, false, "Absent"];

// // // console.log(arr);
// // // console.log(arr[11]);
// // // console.log("The length of the array is", arr.length);
// // // arr[11] = 23;
// // // console.log(arr[11]);
// // // console.log(typeof arr);

// // // for (let i = 0; i < arr.length; i++) {
// // //   console.log(arr[i]);
// // // }
// // let b = arr.toString();
// // console.log(b);

// // let c = arr.join("__");
// // console.log(c, typeof c);

// // // let r = arr.pop();
// // // console.log(arr, r);

// // // let n = arr.push(50);
// // // console.log(arr, n);

// // let nn = arr.shift();
// // console.log(arr, nn); // Removes an element from the start of array

// // let n = arr.unshift(12);
// // console.log(arr, n); // Adds an element from the start of array

// // delete arr[0];
// // console.log(arr);
// // console.log(arr.length);

// // let arr2 = [11, 12, 13, 14, 15, 16, 17];
// // let newArr = arr.concat(arr2);
// // console.log(newArr, newArr.length);

// let arr3 = [23, 43, 543, 234, 125, 556, 763];
// arr3.sort();
// console.log(arr3);

// let compare = (a, b) => {
//   return a - b;
// };

// // arr3.sort(compare);
// // console.log(arr3);

// // arr3.reverse();
// // console.log(arr3);

// // Splice and Slice
// // arr3.splice(2 = index, 3 = remove 3 elements, 1000, 2000, 3000, 4000 = add these elements there);

// arr3.splice(2, 3, 1000, 2000, 3000, 4000);
// console.log(arr3);

// // Slice

// let slicedArr = arr3.slice(2, 4);
// console.log(slicedArr);

let arr = [12, 34, 13, 644, 74, 43, 79];

// ForEach Loop
// arr.forEach((e) => {
//   console.log(e);
// });

arr.forEach((element, index, array) => {
  console.log(element);
  console.log(index);
  console.log(array);
});
