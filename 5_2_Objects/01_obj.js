const mysim = Symbol("uniqueid")

const jsUser = {
    namee: "Dhruv",
    "full name": "Dhruv Makawana",
    age: 18,
    email: "dhruvmakwana@gmail.com",
    isLogedIn: false,
    null : d , // ahi object ma null as a string ave che na ke as a datatype
    undefined : e ,
    lastLoginDays: ["monday", "tuesday", "friday"],
    [mysim]: "uniqueid" // syomble define karva 
    // ChatGpt search :- object me syomble data type ko kese define kare
}

// object ma koi pan ne print karavi hoy to sav thi pela te tene strig(namee , null , isLogedIn) ma convert kare che pachi value match
//  kare che ane pachi expected result mde

console.log(jsUser.namee); // aa rite declare kari sakay but in some case aa ny chale
console.log(jsUser["namee"]); // aa biji rit che 
// <<ahi apde jo fullname ne print karvu che to te dot vadi method thi koi j rite access nai kari sakay>>
console.log(jsUser["full name"]);

jsUser["namee"] = "kinjal dave"
Object.freeze(jsUser);  // ahi jo je te object ne freeze kari dai to tei value change na thy
jsUser.namee = "raj thakkar"
console.log(jsUser)

console.log(jsUser["mysim"]) /*✖️*/
console.log(jsUser[mysim]) /*✔️*/



/*object ko const kiya par phir bhi useke anadar ke values change ho rhe hai 

Bahut accha question hai. Ye JavaScript ka ek important concept hai.
Jab tum const se object banate ho, to object lock nahi hota, balki object ka reference lock hota hai.

Example
const student = {
    name: "Dhruv",
    age: 20
};

student.age = 21;      // ✅ Allowed
student.name = "Rahul"; // ✅ Allowed
console.log(student);

Output:

{
  name: "Rahul",
  age: 21
}

Ye isliye allowed hai kyunki object wahi hai, sirf uske andar ki properties change hui hain.

Lekin agar pura object change karoge
const student = {
    name: "Dhruv"
};

student = {
    name: "Rahul"
};

Output:

Uncaught TypeError: Assignment to constant variable.

Ye error aayega kyunki student variable ko kisi naye object ka reference dene ki koshish kar rahe ho.
Samajhne ka simple tareeka
Maan lo:

const person = {
    name: "Dhruv"
};

Memory me kuch aisa hota hai:

person
   │
   ▼
+----------------+
| name: "Dhruv"  |
+----------------+

const ka matlab hai person hamesha isi object ki taraf point karega.

Tum object ke andar:

person.name = "Rahul";

kar sakte ho, kyunki object wahi hai.

Lekin:

person = {
    name: "Amit"
};

nahi kar sakte, kyunki ab person ko dusre object ki taraf point karwana chahte ho.

Array me bhi same rule hota hai
const arr = [1, 2, 3];

arr.push(4);     // ✅ Allowed
arr[0] = 100;    // ✅ Allowed

console.log(arr);

Output:

[100, 2, 3, 4]

Lekin:

arr = [5, 6, 7];

❌ Error aayega.

Agar object ki values bhi change na ho

Uske liye Object.freeze() use kar sakte ho.

const student = Object.freeze({
    name: "Dhruv",
    age: 20
});

student.age = 21; // Change nahi hoga

console.log(student);

Output:

{
  name: "Dhruv",
  age: 20
}
Ek line me yaad rakhna:
let → Variable ko dubara assign bhi kar sakte ho aur value bhi badal sakte ho.
const → Variable ko dubara assign nahi kar sakte, lekin object/array ke andar ki values change kar sakte ho.
Object.freeze() → Object ki properties ko bhi change hone se rok deta hai (shallow freeze).

Ye interview me bahut pucha jane wala concept hai.*/
