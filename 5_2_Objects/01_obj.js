const mysim = Symbol("uniqueid")

const jsUser = {
    namee : "Dhruv" ,
    "full name" : "Dhruv Makawana" ,
    age :  18 ,
    email : "dhruvmakwana@gmail.com",
    isLogedIn : false ,
    lastLoginDays : ["monday" , "tuesday" , "friday"] ,
    [mysim] : "uniqueid" // syomble define karva 

}

console.log(jsUser.namee); // aa rite declare kari sakay but in some case aa ny chale
console.log(jsUser["namee"]); // aa biji rit che 
// <<ahi apde jo fullname ne print karvu che to te dot vadi method thi koi j rite access nai kari sakay>>
console.log(jsUser["full name"]); 

jsUser["namee"] = "kinjal dave"
Object.freeze(jsUser);  // ahi jo je te object ne freeze kari dai to tei value change na thy
jsUser.namee = "raj thakkar"
console.log(jsUser)

