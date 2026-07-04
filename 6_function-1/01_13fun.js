// Function Expression (nameless functions)  jema apde funcion nu name declare nathi karta 

let sum = function(x , y){
    return x + y
}
console.log(sum(1,2)) // ahi sum ae functin nu name nthi te variable nu name che ane ahi apde function ne variable na name upar thi access kari
// sakiae chiae


let printHelloo = function(){
    console.log("Hello!")
}

printHelloo = function(){
    console.log("Namaste!") 

}

// ahi aa ak let a = "Dhruv" 
// aa rite j work kare cche bs ama koi value store karvai jagya ae function nakhi didhu che 
// jem apde variable ni value change kari sakiae chiae ae j rite function ni pan value change kari sakay

printHelloo()

