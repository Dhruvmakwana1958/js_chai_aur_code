let greet = function(){ // CALLBACK function (ahi apda case ma greet) 
    console.log("Hii, Good morning dude!")
}
// This is called higher order function
let multiGreet = function(func , n){  //  kem ke aa function koi bija function ne as a argument le che
 // func ma koi pan banavelu function nakho ,  ane n ketli var  tene print karavu che 
    for(let i = 1 ; i<=n ; i++){
        func() // function ne vare ghadiye call karva mate jya sudhi te n sudhi na print thy jay aa function potani jatne jate j call karya karse
    }
}
multiGreet(greet , 5); 
// multiGreet(greet() , 5); ✖️
multiGreet(function(){console.log("namste")} , 3) // as a argument apde function ni defination j lakhi kadhii

/*IMP NOTE :- o function kisi dusre function ko argument ke roop me diya jata hai aur baad me us function ke andar call kiya jata hai, use callback function kehte hain.

Tumhare code me:

let greet = function(){
    console.log("Hii, Good morning dude!");
}
Ye sirf ek normal function hai.

Jab tum ise multiGreet me pass karte ho:
multiGreet(greet, 5);
to greet callback function ban jata hai.*/