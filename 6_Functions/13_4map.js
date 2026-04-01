const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNumers
                .map((num) => num * 10 ) 
                .map( (num) => num + 1) // chaining ane same line ma b lakahay ane niche b lakhi sakay
                .filter( (num) => num >= 40)

console.log(newNums)