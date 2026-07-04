const user = {
    username : "hitesh" ,
    price : 999 ,

    welcomMessage : function(){
        console.log(`${this.username} , welcome to website`) // current context ne reffere karvu hoy tyare this no use thy
    }
}


// functions ni andar this no use na thy object mate j kari sakay 

user.welcomMessage();
user.username = "sam" // ahi apde username ni value change kari sakya kem ke this ryu te current context no reference ape che jo this na lagadyu 
// hot to error avet mtlb jetli var apde aa object ne access karvi etli var ak vastu dhyan ma rakhe je current context hoy teni value levi
user.welcomMessage();
console.log(user)

// ***********************************************************************************************************************************

// function chai(){
//     let username = "dhruv"
//     console.log(this) // gives empty parenthisis
//     console.log(this.username) // this no use khali object ni anadar j thy che function ma nthi thato
// }
// chai()