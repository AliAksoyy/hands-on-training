const langInput = document.querySelector(".lang-input")
const addBtn = document.getElementById("#add-btn")
const deleteBtn = document.querySelector("#delete-btn")
const langList =document.getElementById("lang-list")

const newUl = document.createElement("ul");
langList.appendChild(newUl)


addBtn.addEventListener("click", () => {
  if(!langInput.value) {
    alert("please enter a language")
  } else {``
    newUl.innerHTML +=` <li>${langInput.value}</li>`
  }
  langInput.focus()
})

window.addEventListener("load", () => {
  langInput.focus()
})

deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
?  newUl.removeChild(newUl.lastElementChild) :
alert("There is no item to delete")
})


langInput.addEventListener("keydown", function (event) {
  console.log(event)
  if(event ===13) {
    
  }
})