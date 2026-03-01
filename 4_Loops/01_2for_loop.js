// for(let i =0 ; i<=10 ; i++){
//     if(i === 5){
//         console.log(`${i} is best number`)
//     }
//     console.log(i)
// }

for(let i = 0 ; i<= 10 ; i++){
    console.log(`outer loop values : ${i}`)
    for(let j = 0 ; j<=10 ; j++){
        console.log(i + "*" + j + "=" + i*j);
    }
}