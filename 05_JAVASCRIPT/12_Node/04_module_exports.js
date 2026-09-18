const sum = (a, b) => a +b;
const mul = (a, b) => a *b;
const g = 9.8;
const PI = 3.14;

// have aa j apde function je aya banyu tene apde 03_Process.js vadi file ma pan use karva che to te possible che using export & require
// mtlb ak file na functions/property ne biji file ma use kri sakay 




// module.exports = sum; // first trick mate aa (03_process_exports.js)



// OR
// let obj = {
//     sum :sum,
//     mul :mul,
//     g :g,
//     PI :PI
// }
// module.exports = obj;

// OR 
module.exports = {
    sum :sum,
    mul :mul,
    g :g,
    PI :PI
}

//OR
// module.exports.sum = (a, b) => a +b;
// module.exports.mul = (a, b) => a *b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;
