console.log(Array.isArray(["dhruv"]));
console.log(Array.isArray("dhruv"));

console.log(Array.from("hitesh")); // converts into arrays
console.log(Array.from([5 , 6  , 7 , 8 ])) // nums ne convert karva square bracket mukvu

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1 , num2 , num3))

let items = ["ferrari" , "audi" , "bmw" , "mercidiese"] 
items.sort()
console.log(items) // gives change 

let num = [22 , 55 , 89 ,78 ,5] ;
num.sort();
console.log(num) ; // its not give expected result 