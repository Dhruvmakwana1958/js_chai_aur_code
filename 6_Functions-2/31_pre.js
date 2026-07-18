// Q. Write a function called mergeObjects that accepts two objects
// and returns a new object which contains all the keys and values
// of the first object and second object.

// Meaning:
// 1. Function ka naam mergeObjects hoga.
// 2. Function 2 objects accept karega.
// 3. Dono objects ke keys aur values ko mila kar ek naya object return karega.
// 4. Iske liye Spread Operator (...) ka use karenge.

// Syntax:
// function mergeObjects(obj1, obj2)

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example 1
let obj1 = {
    name: "Dhruv",
    age: 20
};

let obj2 = {
    city: "Ahmedabad",
    country: "India",
    age :25 // Agar dono objects me same key ho, to second object (obj2) ki value overwrite ho jayegi.
};

console.log(mergeObjects(obj1, obj2));

