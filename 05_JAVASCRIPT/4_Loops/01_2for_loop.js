// for(let i =0 ; i<=10 ; i++){
//     if(i === 5){
//         console.log(`${i} is best number`)
//         // continue (we can write continue if we dont need to write 5 two times in output , please check output before confusing that line)
//     }
//     console.log(i)
// }

for(let i = 0 ; i<= 10 ; i++){
    console.log(`outer loop values : ${i}`)
    for(let j = 0 ; j<=10 ; j++){
        console.log(i + "*" + j + "=" + i*j);
    }
}