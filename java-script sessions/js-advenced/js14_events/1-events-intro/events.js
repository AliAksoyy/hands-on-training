const h1 = document.querySelector('header h1');
h1.onmouseover = () => {
    h1.style.color = "red"
    h1.style.fontWeight = "200"
}
h1.onmouseout = function () {
    h1.style.color = "black";
    h1.style.fontWeight = "800"
}

h1.addEventListener("click", function () {
     alert("h1 pressed")
})

document.getElementById("btn").addEventListener("click", function () {
    const input = document.querySelector("#input")
    // if(!input.value) {
    //     alert("please enter an item")
    // }else {
    //     alert(`${input.value} entered`)
    // }
    !input.value ? alert("sd") : alert("sw")
    input.value = ""
})

const list = document.querySelectorAll('.list');
list.forEach((li) => {
    li.style.transition = "font-size 1s"
    li.style.lineHeight = "2rem"
    li.onmouseover = ()=> {
        li.style.fontSize = "2rem"
        li.style.transform = "translateX(10px)"
    }
    li.onmouseout = () => {
        li.style.fontSize = "1rem"
        li.style.transform = "translateX(-10px)"
    }
})
