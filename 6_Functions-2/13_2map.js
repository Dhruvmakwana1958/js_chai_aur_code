//map unique value mate use thy che ane je order ma lakhyu che te j order avse
const maping = new Map();
maping.set('IN', "India")
maping.set ('USA', "United States of America")
maping.set('Fr', "France")
maping.set('IN', "India")

console.log(maping);

// loop lagdine
// for(let keys of maping){
//     console.log(keys); // avu karva thi akhe akhu map nu print thy che but ape eni keys ya t value j joi che to ena mate niche mujb kari sakay
// }

for(let [keys] of maping){
    console.log(keys)
}

for(let [keys , values] of maping){
    console.log(keys + ":--" + values)
}

for(let keys in maping){
    console.log(keys)  // koi output j ny ave kem ke map method ae iterable nthi ane of in loop iterable upar j  work kare
}

// apde map ne for of thi iterate karvyu su te j rite apde object ne pan print karavi sakiae??

const myObj = {
    game1 : "NFS",
    game2 : "Spiderman"
}
// for(let [games] of myObj){
//     console.log(games)  // for of is not working on objects X
// }

for(let games in myObj ){
    console.log(`keys:-${games} & value:-${myObj[games]}`)
}

