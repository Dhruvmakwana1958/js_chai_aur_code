const calculator = {
    add : function(a,b){
        return a + b
    } ,
    sub : function(a,b){
        return a - b
    },
    mul : function(a,b){
        return a * b
    }
}

// OR 
// this is shorhand to declare function in objects
const cal2 = {
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    },
    mul(a,b){
        return a*b
    }
}

/* OR
const cal2 = {
    add: (a, b) => {
        return a + b;
    },
    sub: (a, b) => {
        return a - b;
    },
    mul: (a, b) => {
        return a * b;
    }
}
*/

console.log(cal2.add(20,50))
console.log(calculator.add(4,5))
console.log(calculator.mul(4,5))

// aa object ma function pde je rite banvy che ae j concept thi Math function pan kam kare che
console.log(Math.PI)
console.log(Math.random());

// apde string and arrays ma je methods use kariae chiae te internally ak object j che

