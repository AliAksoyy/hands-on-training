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
    if(input.value)
})