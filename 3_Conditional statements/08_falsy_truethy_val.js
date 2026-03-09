// const userEmail = "hitesh.ai" //true 

// if (userEmail) {
// console. log("Got user email");
// } else {
// console. log("Don't have user email");
// }

// const userEmail = "" //false, mtlb ke usereEmail ma "" apyu ane te if stat ma gyu but ouyput ma else vadu execute thy che mtlb if vadu true na thyu
// if (userEmail) {
// console. log("Got user email");
// } else {
// console. log("Don't have user email");
// }

const userEmail = [] //true
if (userEmail) {
console. log("Got user email");
} else {
console. log("Don't have user email");
}

// ******************************************************************************************************************************************
/*notes :---> falsey values
 false, 0, -0, BigInt On, "", null, undefined, NaN 

 notes  :---> truethy values
 "0", 'false' , " ", [], {}, function() {}
 */

 if(userEmail.length === 0){  //  to check array is empty or not
    console.log("array is empty")
 }

 const emptyobject = {};

 if(Object.keys(emptyobject).length === 0){
    console.log("object is empty");
    
 }


