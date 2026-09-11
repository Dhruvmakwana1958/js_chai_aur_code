/*1]Square and sum the array elements using the arrow function and then find the
average of the array.*/


let arr = [2, 3, 4, 5];

// Square each element
let square = arr.map(ele => ele * ele);

// Sum of squared elements
let sum = square.reduce((acc, ele) => acc + ele, 0);

// Average
let average = sum / arr.length;

console.log("Squared Array:", square);
console.log("Sum:", sum);
console.log("Average:", average);


// Short Version

let avg = arr
    .map(ele => ele ** 2)
    .reduce((acc, ele) => acc + ele, 0) / arr.length;

console.log(avg); // 13.5
// map() → har element ka square karta hai.
// reduce() → sab squares ka sum karta hai.
// arr.length se divide karke average nikalte hain.