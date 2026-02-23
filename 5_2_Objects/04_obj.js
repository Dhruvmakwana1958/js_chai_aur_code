const arr = new Array()
arr.name = "dhruv"
arr.isloggedin = false;

console.log(arr);

const regularUser = {
    email : "dhruvmakwana1788@gmail.com" ,
    fullname : {
        userFullName : {
            firstName : "Dhruv" ,
            lastName : "Makwana"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userFullName);

let obj1 = {1 : "a" , 2 : "b"};
let obj2 = {3 : "c" , 4 : "d"};

// const obj3 = Object.assign({} , obj1 , obj2) // ama {}(empty obj) ny devi to pan chalse
// console.log(obj3)

const obj3 = {...obj1 , ...obj2}
console.log(obj3)


