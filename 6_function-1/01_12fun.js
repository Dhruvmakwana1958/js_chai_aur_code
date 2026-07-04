function outer(){
    let x = 5 ;
    let y = 6 ;
    function inner(){
        console.log(x);  
        console.log(y);  
    }
    inner();
}
outer();  
//  THIS CODE RUN SUCCESFULLY
// *****************************************************************************************


let greet = "hello"; // global scop

function changeGreet() {
    let greet = "namaste";
    console.log(greet); //function scop
    function innerGreen() {
        console.log(greet); // lexical scop (nesting :- ak ni andar biju)

    }
    innerGreen()
}

console.log(greet); 
changeGreet();