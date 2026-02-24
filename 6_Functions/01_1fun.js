const loginUserMessage = function(username="sam"){
    if(!username){
        console.log("please enter username")
        return
        // aa retun lakhvano mtlb ke ani paci nu execute na thy
    }
    return console.log(`${username} just logged in`)
}

loginUserMessage()

// ************************************** ADD TO CART *************************************

function calculateCartPrice(...num1){ // ... is rest operator
    return num1
}
console.log(calculateCartPrice(200 , 400 , 599))