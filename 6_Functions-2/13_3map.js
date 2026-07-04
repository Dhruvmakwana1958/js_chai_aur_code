const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];

const newnumbs = arr.map((val)=> val*10)
console.log(newnumbs)

// arr.forEach((val)=>{
//     console.log(val * 10);
// }) // foreach ma apde return no use na kari sakvi kem ke forEach array na ak ak element upar jay che ane te value le che te return nthi karavi saktu
// ane jo return karavi ne navo j array banvo hoy to map method che but jo apde foreach no use karvani sathe return b karvu chr to....



// const newArr =[];
// arr.forEach((val)=>newArr.push(val * 10)); // IMPLICIT RETURN
// console.log(newArr);

// const newArr =[];
// arr.forEach((val)=>{
//    return newArr.push(val * 10)
// }); // EXPLICIT RETURN
// console.log(newArr);


