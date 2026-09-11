// "This" keyword refers to an object that is executing the current piece of code.

const student = {
    name: "shradha",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this)
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got average marks ${avg}`)
    }

}
student.getAvg()
//jyare object ni andar function banava ni vat ave tyre This no ullekh thy che 
// this na use thi apde current objet na parameter ni function ni andar acces kari sakiae chiae 

// javascript ma sav ti mota ma mot object ae window object che mtlb jo koi objject koi case ma nthi to te by default window object to che j 