
const h1 =document.querySelector("#header h1");
h1.onmouseover = function() {
  h1.style.color = "red"
  h1.style.fontWeight = "200"
}

h1.onmouseout = () => {
  h1.style.color = "black"
  h1.style.fontWeight = 800
}

h1.addEventListener("click", () => {
  alert("h1 pressed")
})

const btn =document.getElementById("btn")

btn.addEventListener("click", function() {
  const input = document.querySelector("#input")
  // if(!input.value) {
  //   alert("please enter an item")
  // }else {
  //   alert(`${input.value} entered`)
  // }
  !input.value
    ? alert("please enter an item")
    : alert(`${input.value} entered`);
})