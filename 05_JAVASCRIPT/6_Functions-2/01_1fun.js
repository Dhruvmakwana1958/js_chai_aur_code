const loginUserMessage = function(username="sam"){
    if(!username){
        console.log("please enter username")
        return
        // aa retun lakhvano mtlb ke ani pachi nu execute na thy
    }
    return console.log(`${username} just logged in`) 
}

loginUserMessage()
// OR
// loginUserMessage("sam")   
// ************************************** ADD TO CART ****************************************

function calculateCartPrice(...num1){ // ... is rest operator
    return num1
}
console.log(calculateCartPrice(200 , 400 , 599))

/*
we can calculate the sum of this given array 
function calculateCartPrice(...num1){ // ... is rest operator
    let sum = 0
    for(let i=0 ;i<num1.length;i++){
        sum+=num1[i]
    }
    return sum
}
console.log(calculateCartPrice(200 , 400 , 599))
*/