// ? rastegele sayı tut
// ? input value'ye bak ve buttona değer girlimiş mi girilimemiş mi
// ? input value boş olamaz
// ? score ve topscpre belirle ve local kullan
// ! rasgele ile girilen değer tutuyorsa
// ? boy rengi değştir
// ? gizli noyu aç
// ? metni değiştir
// ! rastegele ve girişne deger değilse
// ? bu arada score bir azalat
// ? rastegele sayı gizliden büyükse düürr
// ? tam tersi ise artur
// ? bilemzen body rengi değşişr
// ? metni değişit

// ! again de de herşeyi baştan yap


const randomNumber = Math.round(Math.random()*100)
console.log(randomNumber);

let score = 10
let topScore = localStorage.getItem("topScore") || 0
document.querySelector(".top-score").innerText = topScore

document.querySelector(".check-btn").addEventListener("click", ()=> {
    const input = document.querySelector(".guess-input").value
    if(!input) {
        document.querySelector(".msg").innerText="Lütfen bir değer giriniz"
    }else if(randomNumber==input) {
        document.querySelector(".msg").textContent="Tebrikler kazandiniz 😎"
        // document.querySelector("body").style.background="red"
        document.querySelector("body").classList.add("bg-success")
        document.querySelector(".secret-number").textContent=randomNumber
        localStorage.setItem("topScore", score)
        document.querySelector(".top-score").innerText= `${score}`

    }else {
        score--
        if(score>0){
         document.querySelector(".score").innerText= `${score}`

         input>randomNumber ?  document.querySelector(".msg").innerText="Decrease":   document.querySelector(".msg").innerText="Increase"
        }else if(score==0){
            
            document.querySelector(".msg").innerText= "kaybettiniz"
            document.querySelector("body").setAttribute("class","bg-danger")
            document.querySelector(".score").innerText= `${score}`
            document.querySelector(".check-btn").disabled=true
        }   
    }


})

