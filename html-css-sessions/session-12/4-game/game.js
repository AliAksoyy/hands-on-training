const body = document.querySelector("body");
const car = document.querySelector(".car");
const ground = document.querySelector(".ground")

const carImg = document.querySelector(".car img")
body.addEventListener("keydown", (e) => {

    let flag = true;
    if(e.code ==="Enter") {
        if(!ground.classList.contains("right")) {
            ground.classList.add("right");
            car.classList.add("poo-up")
        }
    }
})

body.addEventListener("keydown", (e)=> {
    if(e.code === "Escape") {
    if(flag) {
        carImg.setAttribute("src","./img/Img_05.png")
    }else {
        carImg
    }
    }
})