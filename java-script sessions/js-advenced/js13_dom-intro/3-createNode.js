const newP = document.createElement("p")
newP.id = "new-par"
newP.setAttribute("class", "new-class")


const text = document.createTextNode("This is a paragraf")
newP.appendChild(text)
console.log(newP)

const h2 = document.querySelector(".item-list h2")

h2.after(newP)

console.log(newP.getAttribute("class"))
console.log(newP.getAttribute("id"))

console.log(newP.classList.contains("par"))
newP.classList.add("newP")
newP.classList.toggle("newp")
console.log(newP)

