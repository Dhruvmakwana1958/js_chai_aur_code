const mysim = Symbol("uniqueid")

const jsUser = {
    lastLoginDays : ["monday" , "tuesday" , "friday"] ,
    [mysim] : "myid" // syomble define karva 

}

console.log(jsUser)
/*JS to block scope hai, to bahar wala aur andar wala alag hona chahiye?

👉 Nahi.

Object literal {} koi new scope create nahi karta.
Sirf functions, {} blocks (let/const ke saath), etc. scope banate hain.

Object ke andar jo [mysim] likha hai:

Ye variable declare nahi kar raha

Ye sirf bahar wale mysim ko use kar raha hai

Agar tum object ke andar hi symbol banana chaho

Ye karo:

const jsUser = {
   [Symbol("uniqueid")]: "uniqueid"
};*/