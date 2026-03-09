let items = ["potato", "Apple", "Litchi", "Tomato"];
let marks = [94,87, 65, 77];
let heros = ["spiderman", "Thor"];

console.log(items.includes("Tomato"))
console.log(items.indexOf("Tomato"))

//convert arr to str but we can give specification about seprator
console.log(marks.join()); // 94,87,65,77
console.log(marks.join(" ")); // 94 87 65 77
console.log(marks.join(" - ")); // 94 - 87 - 65 - 77
console.log(marks.join(" ___ ")); //  ___ 87 ___ 65 ___ 77

// also converts array to string but we have no specification to seprate
console.log(items.toString());

let my = items.push(marks);
console.log(my); // aa navo array show ny kare
console.log(items); // banne joint to thy gya but ak array ni andar bijo array ae rite avyu ane ani length items na 4 element mtlb 4 ane + 1 mark 
// vado array = 5 apde ahi concat method no use karvo joiae
console.log(items.concat(marks).join(" "))
console.log("\n")


let car = ["benz" , "chevrollete"] // it's called speread method
let bottle = ["redLable" , "signature"]
let allEle = [...car , ...bottle , ...marks];
console.log(allEle)

let another_array = [2 ,4 ,8 , [76 ,43 ,90] , 54 , [2 ,3 ,[9 , [25 ,35]]]];
let r_anothet_array = another_array.flat(Infinity); // 2,  4, 8, 76, 43,  90, 54, 2,  3,  9
console.log(r_anothet_array);
//(but apde infinity lakyu eni jagya e apde eni depth pan appi sakvi)
/*let r_anothet_array = another_array.flat(1); //[ 2, 4, 8, 76, 43, 90, 54, 2, 3, [ 9, [ 25, 35 ] ] ]*/





