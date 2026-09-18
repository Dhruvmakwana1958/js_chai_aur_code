/*
PROCESS  

Process :- This object provides information about, and control over, the current Node.js process.(Node.js me process ek built-in 
global object hai jo hume currently running Node.js  program/process ke baare me information aur control deta hai.)
console.log(process); Isse Node.js ke current process ki bahut saari information mil jayegi.

•-> process.version  = version reletd info
•-> process.relese   = relese information
•-> process.cwd()    = current working directory
•-> process.argv     = returns an array containing the command-line arguments passed when the Node.js
                       process was launched.
    - apde apda vs code ma console.log(process.argv); lakhyu have aa file ne run karva pela to node na environment ma thi bar nikdvu
     tena mate .exit now node 02_Node_files.js
    - process.argv type karvathi [ 'C:\\Program Files\\nodejs\\node.exe' ] aa ritno array avse jema ak single value che
    [
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\FSWD Journey\\05_JAVASCRIPT\\12_Node\\02_Node_files.js'
    ]
  ama 2 value avase 1st executable path for node ane  bija ma ma apdi file ni location avse 
    - ani sathe apde arugument pan pass kari shakvi for ex. node 02_Node_files.js hey bye

*/
let args = process.argv 

for(let i = 2 ; i<args.length ; i++){
    console.log("Welcome to, " , args[i])
} 
// aa lakhya pachi cmd ma type karvu 03_Process.js Dhruv Rahul Amit je thi array avi jse 



// ++++++++++ First trick +++++++++++
// aa joya pela 04_module_export vadi file jovo pela ema export su karyu ae jovo pachi aya avo
const math = require("./04_module_exports")
console.log(math(10,20)); // ama khali ne khali sum function j expoert thyu 
// moodule.export is a one type of object
// if we don't pass anything and we requre from this file in that case module.expoert gives "{}" empty object 


/*
require() : a built-in function to include external modules that exist in separate files.
module.exports : a special object
*/