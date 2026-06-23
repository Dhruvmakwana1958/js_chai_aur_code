//Nullish colescing Operator ??: null undefined

let val ;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15 ; 
val1 = null ?? 10 ?? 20

console.log(val1)
 
/*Nullish colescing Operator ??: kya hai

Nullish Coalescing Operator ?? ka use hota hai:

👉 Agar left side ki value null ya undefined ho to right side ki value use karo.

Syntax:

value1 ?? value2

Meaning:

agar value1 null ya undefined hai
→ value2 use karo
warna value1 hi use karo

Example 1:

let name = null;

console.log(name ?? "Guest");

Output:

Guest

Example 2:

let name = "Dhruv";

console.log(name ?? "Guest");

Output:

Dhruv

Example 3:

let marks;

console.log(marks ?? 0);

Output:

0

Kyuki marks = undefined

Ab || aur ?? ka difference dekho:

console.log(0 || 100);

Output:

100

Kyuki 0 falsy hai.

Lekin:

console.log(0 ?? 100);

Output:

0

Kyuki ?? sirf:

null
undefined

check karta hai.

Ek aur:

console.log("" ?? "Hello");

Output:

""

Empty string bhi accept karega.

Short yaad rakho:

||  → falsy values check karta hai
??  → sirf null aur undefined check karta hai*/