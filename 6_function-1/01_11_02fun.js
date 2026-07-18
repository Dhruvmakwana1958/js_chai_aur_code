
// console.log(age);
// let age = 20;    ✖️ error apse kem ke let ma pela console karyu ena karne peli j line ma error avi ane pachi nu execute j na thyu 
// console.log(age);

try {
    console.log(age);
} catch {
    console.log("this gives error")
}                  /* ✔️ ama print thy jase */
let age = 20;
console.log(age);
 
/*
=========================================
Hoisting + TDZ (Temporal Dead Zone)
=========================================

Code:

console.log(age);
let age = 20;
console.log(age);


-----------------------------------------
Step 1: Hoisting
-----------------------------------------

JavaScript sabse pehle variable declaration ko memory me le jata hai.

let age ko hoist to kiya jata hai,
lekin uski value initialize nahi hoti.

Memory:

age ---> <uninitialized>   // TDZ


-----------------------------------------
Step 2: Pehla console.log(age)
-----------------------------------------

console.log(age);

Is time 'age' TDZ (Temporal Dead Zone) me hai.

Isliye JavaScript ReferenceError throw karta hai.

Error:

ReferenceError: Cannot access 'age' before initialization

-----------------------------------------
Step 3: Program Stop
-----------------------------------------

Jaise hi ReferenceError aata hai, JavaScript program ki execution wahi rok deta hai. Iske baad wali lines execute hi nahi hoti.
Yani ye lines kabhi run nahi hoti:

let age = 20;
console.log(age);

-----------------------------------------
Execution Flow
-----------------------------------------

console.log(age);   // ❌ Error (TDZ)
        │
        ▼
Program Stop
        │
        ▼
let age = 20;       // ❌ Execute nahi hua
        │
        ▼
console.log(age);   // ❌ Execute nahi hua


-----------------------------------------
Agar pehla console hata do
-----------------------------------------

let age = 20;
console.log(age);

Output:

20


Reason:

1. let age = 20 execute hua.
2. TDZ khatam ho gayi.
3. age ki value 20 initialize ho gayi.
4. Ab console.log(age) 20 print karega.


-----------------------------------------
Agar aisa likho
-----------------------------------------

let age = 20;

console.log(age);
console.log(age);

Output:

20
20

Reason:

Variable pehle hi initialize ho chuka hai,
isliye dono console.log sahi chalenge.


-----------------------------------------
Important Point
-----------------------------------------

Question:

"Maine declaration ke baad print kiya tha,
phir bhi print kyu nahi hua?"

Answer:

Print declaration ke baad hona tha, lekin program us line tak pahucha hi nahi. Pehle hi line par error aa gaya tha:

console.log(age);   // ❌ Error

Isliye JavaScript ne execution wahi stop kar di.

Result:

let age = 20;       // Execute hi nahi hua.
console.log(age);   // Execute hi nahi hua.


-----------------------------------------
Memory Diagram
-----------------------------------------

1) Hoisting

age ---> <uninitialized> (TDZ)

        │
        ▼

2) console.log(age)

ReferenceError
        │
        ▼

3) Program Stop

        │
        ▼

4) Declaration aur last console execute hi nahi hue.


-----------------------------------------
Easy Rule (Interview Point)
-----------------------------------------

var
→ Hoist hota hai.
→ undefined se initialize hota hai.
→ Declaration se pehle access kar sakte hain.

let
→ Hoist hota hai.
→ TDZ me rehta hai.
→ Declaration se pehle access karoge to ReferenceError aayega.

const
→ Hoist hota hai.
→ TDZ me rehta hai.
→ Declaration se pehle access karoge to ReferenceError aayega.


-----------------------------------------
One-Line Memory Trick
-----------------------------------------

Hoisting sabme hoti hai.

var
= Hoisted + initialized (undefined)

let
= Hoisted + uninitialized (TDZ)

const
= Hoisted + uninitialized (TDZ)

TDZ me variable ko access karoge,
to JavaScript ReferenceError dekar
program ki execution wahi stop kar dega.
*/