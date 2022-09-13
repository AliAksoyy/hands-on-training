//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

const randomNumber = Math.trunc(Math.random() * 100) +1
console.log(randomNumber)

let score = 10
let topScore = 0

document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg = document.querySelector(".msg")
    const body = document.querySelector("body")
    if(!guessInput) {
        msg.innerText = "Please enter a number"
    }else if (randomNumber === guessInput) {
        msg.innerText = "Congrats You Win"
        body.className = "bg-success"
        if(score>topScore) {
            topScore = score;
            document.querySelector(".top-score").textContent = topScore
        }
        document.querySelector(".secret-number").textContent = randomNumber
    } else {
        score--
        guessInput > randomNumber ? (msg.innerText = "decrease") : (msg.innerText = "decrease")
        document.querySelector(".score").textContent =score
    }
})