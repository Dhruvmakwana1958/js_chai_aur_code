for(let i = 1 ; i <= 10 ;i++){
    if(i === 5){
        console.log(`${i} is detected`)
        break;
    }
    console.log(`value of i is ${i}`)
}

console.log("\n\n")

for(let i = 1 ; i <= 10 ;i++){
    if(i === 5){
        console.log(`${i} is detected`)
        continue;
    }
    console.log(`value of i is ${i}`)
}

