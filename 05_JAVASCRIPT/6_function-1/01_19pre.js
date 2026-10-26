// /*Write a JavaScript function to count the number of vowels in a String
// argument.*/

// function countVowels(str) {
//     let count = 0;
//     let vowelsFound = [];

//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//         if ("aeiou".includes(str[i])) {
//             count++;

//             if (!vowelsFound.includes(str[i])) {
//                 vowelsFound.push(str[i]);
//             }
//         }
//     }

//     console.log("Count =", count);
//     console.log("Vowels =", vowelsFound);
// }

// countVowels("ApNaCollege");


function found(str){
    let count = 0;
    let foundwovwls = []

    str = str.toLowerCase();

    for(let i=0;i<str.length;i++){
        if("aeiou".includes(str[i])){
            count++

            if(!foundwovwls.includes(str[i])){
                foundwovwls.push(str[i])
            }

        }
    }
    console.log(`count : ${count}`)
   console.log("vowels :", foundwovwls);
}
found("ApNaCollege");


