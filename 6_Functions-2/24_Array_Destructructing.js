let Heroes = ["Tony" , "Banner" , "Ant-man" , "Barton" , "Groot"]
// let winner = Heroes[0];
// let runnerup = Heroes[1];
// let secondrunnerup = Heroes[2]; //This is a long way to define

let [winner , runnerup , secondrunnerup , ...others]  = Heroes
console.log(winner , runnerup ) // this is short way to define and its called destructuring 
console.log(others ) // this is a rest operator which is use to collects remaining elemnts of array 