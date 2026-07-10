const student = {
    name : "dhruv" ,
    age : 13 , 
    class : 12 , 
    subject : ["Hindi" , "English" , "Maths" , "Science"] ,
    username : "dhruv@",
    pasword : "abcd"
};

const {username : user , subject , city = "Mumbai"} = student; // ah apde city ne default value apeli che
const {pasword : pas} =student // aa password ne uparvada variable ma pan store karavi shakta ta
console.log(user)
console.log(subject)
console.log(pas)
console.log(city)