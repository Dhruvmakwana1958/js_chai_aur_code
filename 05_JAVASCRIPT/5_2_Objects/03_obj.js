const mysim = Symbol("uniqueid")

const jsUser = {
    namee : "Dhruv Makwana",
    lastLoginDays : ["monday" , "tuesday" , "friday"] ,
    [mysim] : "myid" // syomble define karva 

}

jsUser.greetings = function(){
    console.log("hey js users")
};

jsUser.greetingsTwo = function(){
    console.log(`hey js users i am ${this.namee}`) // ahi this tyare use thy jyare same oject ne reference karvo hoy ane aa jsUser ma su su property 
                                              // che e jova mate aa this use karyu
    console.log(`this is the week of ${this.lastLoginDays}`)
}

jsUser.greetings();
jsUser.greetingsTwo();