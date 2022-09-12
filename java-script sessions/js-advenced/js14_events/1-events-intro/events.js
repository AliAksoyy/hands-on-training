//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const h1 =document.querySelector("#header h1")
h1.onmouseover = function() {
h1.style.color = "red";
h1.style.fontWeight = "200"
console.log("onmouseout");

}

h1.onmouseout = () => {
h1.style.color = "black";
h1.style.fontweight = "800"
}


h1.addEventListener("click", ()=> {
    alert("h1 pressed")
   
})



//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
document.getElementById("btn").addEventListener("click", function() {
    const input = document.querySelector("#input")
    // if(!input.value) {
    //     alert("Please enter an item")
    // } else {
    //     alert(`${input.value} entered`)
    // }
    !input.value
      ? alert("Please enter an item")
      : alert(`${input.value} entered`);
      input.value = ""
})
//* EXAMPLE-2 (addEventListener())
//* 

const list =document.querySelectorAll(".list")
console.log(list)
list.forEach((li) => {
    li.style.transition = "all 1s";
    li.style.lineHeight = "2rem"
li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)"
}
li.onmouseout = () =>{
li.style.fontSize = "1rem"
li.style.transform = "translateX(-10px)"
}
})

window.onload = function () {
    document.querySelector("#btn").focus()
}
