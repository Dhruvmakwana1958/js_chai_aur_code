let gameSeq = [];
let userSeq = [];

let startred = false
let level = 0;
let h2 = document.querySelector("h2")
let btns = ["yellow", "red", "purple", "green"]
let highestScore = 0;

document.addEventListener("keypress", function () {
    if (startred === false) {
        console.log("Game is started")
        startred = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userFlash")
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250)
}

function levelUp() {
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`

    // let randIndex = Math.floor(Math.random()*(3 - 0 + 1)+0)
    let randomIndex = Math.floor(Math.random() * btns.length); // ana thi randomly 0 to 3 sudhi number generate thse 
    let randColor = btns[randomIndex] // ana thi btns nam na arary ma je colours che te aavse
    let randbtn = document.querySelector(`.${randColor}`) // class access karva (yellow , red )je apde css ma api che , ahiya evu thse ke je rancolor thi color avse 
    // eno class randbtn thi select kari sakase 
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randbtn);

}

function checkAns(idx){
    // console.log(`current level : ${level}`) // have ahi je current level ni size che e j size userSequence ane gameSequence ni hse
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
           setTimeout(levelUp , 1000)
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start.`
        document.querySelector("body").style.backgroundColor = 'red'
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = 'white'  
        },150)
        reset();
    }
}

function btnpress(){
    // console.log(this)
    let btn = this
    userFlash(btn)

    userColour = btn.getAttribute("id")
    // console.log(userColour)
    userSeq.push(userColour);
    console.log(userSeq);                                                                                                             

    checkAns(userSeq.length-1);// ana thi current level madse kem ke jetla arays ni size je etlo j user no level hse
}


let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click" , btnpress )
}

function reset(){
    started = false
    gameSeq = []
    userSeq = []
    level = 0 ;
}
