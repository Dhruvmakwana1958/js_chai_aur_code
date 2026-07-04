const TinderUser = {}
// OR
// const TinderUser = new Object

TinderUser.id = "123abc"
TinderUser.name = "sammy"
TinderUser.isFollow = false

const user = [
    {
        id : 1 ,
        email : "hanshraj@gmail.com"
    },
    {
        id : 2 ,
        email : "dhruv@gmail.com"
    },
    {
        id : 3 ,
        email : "chigu@gmail.com"
    },
    {
        id : 4 ,
        email : "jaydeep@gmail.com"
    },
    {
        id : 5 ,
        email : "shuddhi@gmail.com"
    }
]

console.log(user[3]["email"])
user[2].id = 35 ;
console.log(user[2])
console.log("\n")

user.forEach((val)=>{
    console.log(val.email)
})


console.log(TinderUser);
console.log(Object.keys(TinderUser)) // jo object ni keys joi to ano use karvo ane anu output array avse ane jene upyog kari ne aray ni methods 
// ne upyog ma lai sakay
console.log(Object.values(TinderUser))





