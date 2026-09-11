// Regular function
function sum2(x , y){
    return x + y
}
console.log(sum2(25,50))

// Function Expression (Nameless Function)
// aa function ne apde callback ma use nthi kari sakta callback ma arrow ane regular function j kam ave che
const sum3 = function(x,y){
    return x + y;
}
console.log(sum3(25,100))

// Arrow function (NAmeless Function)
const sum = (x,y) => {
    return x+y;
}
console.log(sum(25,5))
