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