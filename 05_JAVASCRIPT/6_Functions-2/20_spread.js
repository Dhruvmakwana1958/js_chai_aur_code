/****************************************************************************************
 *                           SPREAD OPERATOR (...)
 ****************************************************************************************
 *
 * Definition:
 * Spread Operator (...) ka use Array, Object ya Iterable ki values ko
 * Expand (Phailane) ke liye kiya jata hai.
 *
 * Note:
 * ✔ Spread Operator hai.
 * ✘ Spread Method nahi hai.
 *
 * Diagram:
 *
 * [1,2,3] --(...)--> 1,2,3
 *
 ****************************************************************************************/


// 1. Array Copy

let arr1 = [10,20,30];
let arr2 = [...arr1];

// Output
// [10,20,30]


// 2. Arrays Merge

let a = [1,2];
let b = [3,4];

let c = [...a,...b];

// Output
// [1,2,3,4]


// 3. Array me Elements Add

let arr = [2,3,4];

let newArr = [1,...arr,5];

// Output
// [1,2,3,4,5]


// 4. Object Copy

let user = {
    name:"Dhruv",
    age:20
};

let copy = {...user};


// 5. Objects Merge

let obj1 = {name:"Dhruv"};
let obj2 = {age:20};

let obj3 = {...obj1,...obj2 , items : 45};
console.log(obj3)
// Output
// { name: 'Dhruv', age: 20, items: 45 }

// 6. Function Arguments

function add(a,b,c){
    return a+b+c;
}

let nums = [10,20,30];
console.log(add(...nums));

// Internally
// add(10,20,30)


// 7. String → Character Array

let str = "Hello";

console.log([...str]); // ama array banse
console.log(...str);  // ama array ny bne te bs alag alag argument ni jem print thy jase

// Output
// ["H","e","l","l","o"] ;


// 8. Math.max() / Math.min()

let number = [5,10,15,20];

console.log(Math.max(...number)); // 20
console.log(Math.min(...number)); //  5


/***************************************************************************************
 * Spread vs Concat
 ***************************************************************************************
 *
 * Spread
 * [...arr1,...arr2]
 *
 * Concat
 * arr1.concat(arr2)
 *
 * ✔ Dono arrays merge karte hain.
 * ✔ Spread zyada modern aur flexible hai.
 *
 ***************************************************************************************/


/***************************************************************************************
 * Spread vs Rest
 ***************************************************************************************
 *
 * Syntax dono ka same hai (...)
 *
 * Spread  = Expand (Phailana)
 *
 * [1,2,3]
 *    ↓
 * 1,2,3
 *
 *
 * Rest = Collect (Sametna)
 *
 * 1,2,3
 *    ↓
 * [1,2,3]
 *
 ***************************************************************************************/


/***************************************************************************************
 * Interview Uses
 ***************************************************************************************
 *
 * ✔ Array Copy
 * ✔ Array Merge
 * ✔ Object Copy
 * ✔ Object Merge
 * ✔ Function Arguments
 * ✔ Math.max() / Math.min()
 * ✔ String → Character Array
 *
 * Golden Rule:
 *
 * Spread = Expand
 * Rest   = Collect
 *
 ***************************************************************************************/
