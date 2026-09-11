// Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh” 

let uniqueCharacter = function(str){
    let result = ""
    
    for(let i = 0; i<str.length ; i++){
        if(!result.includes(str[i])){
            result += str[i]
          //result.push(str[i]) ✖️ because push mehtod fakt array mate che   
        }
    }
    return result;  

}
let str = "abcdabcdefgggh"
console.log(uniqueCharacter(str));
