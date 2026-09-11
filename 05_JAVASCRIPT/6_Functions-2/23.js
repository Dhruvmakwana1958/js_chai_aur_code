let arr = [1, 2, 3];
let ans = arr.forEach((val) => val * 2);
console.log(ans); // undefined

/*
| Method      | `return` ka use hota hai?   | Naya array return karta hai?                     |
| ----------- | --------------------------- | ------------------------------------------------ |
| `forEach()` | ❌ Nahi (ignore ho jata hai) | ❌ Nahi (`undefined`)                             |
| `map()`     | ✅ Haan                      | ✅ Haan                                           |
| `filter()`  | ✅ Haan                      | ✅ Haan                                           |
| `reduce()`  | ✅ Haan                      | ❌ Nahi (jo accumulator banega, wahi return hoga) |

*/

/* ==========================================================
                Array Methods vs Rest & Spread
==========================================================

Ye 6 concepts do categories me aate hain:

                 JavaScript
                      │
        ┌─────────────┴─────────────┐
        │                           │
  Array Methods              Operators / Syntax
        │                           │
 map()  forEach()           Rest (...)
 filter() reduce()          Spread (...)

----------------------------------------------------------
1) map()
----------------------------------------------------------

✔ Ye Array Method hai.
✔ Sirf Arrays par use hota hai.
✔ Har element par operation karke NEW ARRAY return karta hai.

Example:
let arr = [1, 2, 3];

let ans = arr.map(num => num * 2);

console.log(ans);
// [2, 4, 6]

Output Type:
✅ Array


----------------------------------------------------------
2) forEach()
----------------------------------------------------------

✔ Ye Array Method hai.
✔ Sirf Arrays par use hota hai.
✔ Har element par code chalata hai.
✔ Naya array return nahi karta.

Example:
let arr = [1, 2, 3];

let ans = arr.forEach(num => console.log(num));

console.log(ans);
// undefined

Output Type:
❌ undefined


----------------------------------------------------------
3) filter()
----------------------------------------------------------

✔ Ye Array Method hai.
✔ Sirf Arrays par use hota hai.
✔ Condition true hone wale elements ka NEW ARRAY return karta hai.

Example:
let arr = [1, 2, 3, 4];

let ans = arr.filter(num => num % 2 === 0);

console.log(ans);
// [2, 4]

Output Type:
✅ Array


----------------------------------------------------------
4) reduce()
----------------------------------------------------------

✔ Ye Array Method hai.
✔ Sirf Arrays par use hota hai.
✔ Pure array ko reduce karke ek single value banata hai.

Example:
let arr = [1, 2, 3];

let ans = arr.reduce((acc, curr) => acc + curr, 0);

console.log(ans);
// 6

Output Type:
❌ Fix nahi hota.

reduce() return kar sakta hai:

✔ Number
✔ String
✔ Object
✔ Array
✔ Boolean
✔ Kisi bhi type ki value

Examples:

// Number
arr.reduce((a, b) => a + b);

// String
arr.reduce((a, b) => a + "-" + b);

// Object
arr.reduce((obj, val) => {
    obj[val] = true;
    return obj;
}, {});


----------------------------------------------------------
5) Spread Operator (...)
----------------------------------------------------------

✔ Ye Method nahi hai.
✔ Ye JavaScript Operator/Syntax hai.
✔ Sirf Array ke liye nahi hota.

Ye kisi bhi iterable ko spread (alag-alag values) karta hai.

Use Cases:

1. Array

let arr = [1, 2];

let copy = [...arr];

// [1, 2]


2. String

let str = "Hello";

console.log([...str]);

// ['H', 'e', 'l', 'l', 'o']


3. Object Copy / Merge

let obj = {
    name: "Dhruv"
};

let copy = { ...obj };

console.log(copy);

// { name: "Dhruv" }

Output Type:
➡ Jahan use karoge uske hisab se output milega.

Array → Array

Object → Object

Function arguments → Individual values


----------------------------------------------------------
6) Rest Operator (...)
----------------------------------------------------------

✔ Ye Method nahi hai.
✔ Ye JavaScript Operator/Syntax hai.
✔ Extra values ko collect karta hai.

-------------------------
A) Function Parameters
-------------------------

function sum(...nums) {
    console.log(nums);
}

sum(1, 2, 3, 4);

Output:

[1, 2, 3, 4]

Yahan nums ek Array hota hai.


-------------------------
B) Array Destructuring
-------------------------

let [a, ...rest] = [10, 20, 30, 40];

console.log(rest);

Output:

[20, 30, 40]

Yahan rest bhi Array hota hai.


-------------------------
C) Object Destructuring
-------------------------

let obj = {
    name: "Dhruv",
    age: 20,
    city: "Ahmedabad"
};

let { name, ...rest } = obj;

console.log(rest);

Output:

{
   age: 20,
   city: "Ahmedabad"
}

Yahan rest Object hota hai.


==========================================================
                    COMPLETE SUMMARY
==========================================================

┌──────────────┬──────────────────────────────┬────────────────────────┐
│ Feature      │ Sirf Array?                  │ Output                 │
├──────────────┼──────────────────────────────┼────────────────────────┤
│ map()        │ ✅ Haan                      │ Array                  │
│ forEach()    │ ✅ Haan                      │ undefined              │
│ filter()     │ ✅ Haan                      │ Array                  │
│ reduce()     │ ✅ Haan                      │ Any Type               │
│ Spread (...) │ ❌ Nahi                      │ Depends on usage       │
│ Rest (...)   │ ❌ Nahi                      │ Array / Object         │
└──────────────┴──────────────────────────────┴────────────────────────┘


==========================================================
                 Easy Logic to Remember
==========================================================

JavaScript
│
├── Array Methods
│     │
│     ├── map()      → New Array
│     ├── filter()   → New Array
│     ├── forEach()  → undefined
│     └── reduce()   → Any Type
│
└── Operators / Syntax
      │
      ├── Spread (...)
      │      → Values ko expand karta hai.
      │
      └── Rest (...)
             → Values ko collect karta hai.


==========================================================
             One-Line Memory Trick
==========================================================

✔ map()      → Transform → New Array
✔ filter()   → Filter → New Array
✔ forEach()  → Sirf Loop → undefined
✔ reduce()   → Sabko mila kar ek value
✔ Spread (...) → Expand values
✔ Rest (...)   → Collect values

NOTE:
map(), filter(), reduce() aur forEach() Array Methods hain.

Rest (...) aur Spread (...) Methods nahi hain.
Ye JavaScript ke Operators/Syntax hain, jo Arrays ke alawa
Strings, Objects aur Function Parameters ke sath bhi use hote hain.

========================================================== */