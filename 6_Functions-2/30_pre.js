/* Q. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
 The function should return a new array with the original array values and all of the additional arguments doubled. */


// Meaning:
// 1. Function ka naam doubleAndReturnArgs hoga.
// 2. Function pehla argument ek array lega.
// 3. Uske baad jitne bhi extra arguments diye jayenge, unhe Rest Operator (...args) se collect karega.
// 4. Sabhi extra arguments ko double karega.
// 5. Original array + doubled arguments ko mila kar ek naya array return karega.

// Syntax:
// function doubleAndReturnArgs(array, ...args)

function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map(ele => ele * 2)];
}

// Example 1
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 23));
// Output: [1, 2, 3, 8, 10 ,46]

// Example 2
console.log(doubleAndReturnArgs([10, 20], 3, 6, 9));
// Output: [10, 20, 6, 12, 18]