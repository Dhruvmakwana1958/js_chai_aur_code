function combination(array){
    let result = "" ; 
    for(let i = 0 ; i <array.length ; i++){
        result = result + array[i] + " "
        
    }
    return result ;
    
}

let arr = ["Hey" , "Makwana" , "what" , "are" , "you" , "doing"];
console.log(combination(arr))