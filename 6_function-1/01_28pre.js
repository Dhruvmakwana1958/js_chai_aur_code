// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
};

console.log(arrayAverage([10, 20, 30, 40, 50]));

// Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

const isEven = (num) => {
    return num % 2 === 0;
};
// const isEven = num => num % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(5)); // false

// Agar question me true/false ki jagah "Even" aur "Odd" return karna ho
const isEven2 = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isEven2(9));  // Odd