//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

const randomNumber = Math.trunc(Math.random() * 100) +1
console.log(randomNumber)

document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg = document.querySelector(".msg")
    const body = document.querySelector("body")
    if(!guessInput) {
        msg.innerText = "Please enter a number"
    }else if (randomNumber === guessInput) {
        msg.innerText = "Congrats You Win"
        body.className = "bg-success"
    }
})