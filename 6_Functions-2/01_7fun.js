// / Immediately Invoked Function Expressions (IIFE)

/*function lakyu ane ene tarat execute karvu che ena mate ane biju global scop thi polution na thy ene maate ano use thy
amuk var evu thy ke apde global variable declare karya che pan eno use bloack scop vada pan kari sake to e function nu nam thhi kadach te 
global scop ma ambiguity kari sake etle aa pollute na thy ene mate aa IIFE no use thy che*/


(function chai(){  // named iife because ths fun have named that is chai
    console.log("DB Connected");
})(); // ama ; lagavu farajiyat

// apde ane chai() aa rite pan lakhi sakta ta pan global pollution na thy etle ene kai  nam apya vgr j tart j execute kari nakhyu

( (name) => {  // unnamed iife
    console.log(`DB Connected Two ${name}`);  
})("hitesh")