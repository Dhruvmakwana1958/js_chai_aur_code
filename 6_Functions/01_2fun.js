const user = {
    name : "Dhruv" ,
    subject : "JS",
    price : 199
}

function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
//     OR

handleObject({
    name : "sam",
    price : "5000"
})

const newArray = [200 , 400 , 100 , 600]
function returnSecond(getArray){
    return getArray[1]
}
// console.log(returnSecond(newArray))
// OR
console.log(returnSecond([400 , 200 , 600 , 100]))




