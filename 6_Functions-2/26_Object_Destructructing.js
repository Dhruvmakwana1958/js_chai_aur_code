const student = {
    name : "dhruv" ,
    age : 13 , 
    class : 12 , 
    subject : ["Hindi" , "English" , "Maths" , "Science"] ,
    username : "dhruv@",
    pasword : "abcd" ,
    lat_long : "SG Highway" // but if we don;t defines value in rotiginal object then value can be Gota
};

const {username : user , subject , city = "Mumbai" , lat_long:location = "Gota"} = student; // ah apde city ne default value apeli che but jo real object ma city name ni 
// key hot ane ema value store hot "Pune to console karavta teni value pune j avet"
const {pasword : pas} =student // aa password ne uparvada variable ma pan store karavi shakta ta
console.log(user)
console.log(subject)
console.log(pas)
console.log(city)
console.log(location)