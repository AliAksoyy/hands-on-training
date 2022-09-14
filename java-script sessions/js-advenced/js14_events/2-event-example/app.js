
const langInput = document.querySelector(".lang-input")
const addBtn = document.querySelector("#add-btn")
const deleteBtn = document.querySelector("#delete-btn")
const langList = document.querySelector("#lang-list")


const newUl =document.createElement("ul")
langList.appendChild(newUl);

window.addEventListener("load", ()=> {
  langInput.focus()
})

addBtn.addEventListener("click", () => {
  if(!langInput.value) {
    alert("please enter a language")
  }else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = ""
  langInput.focus();

  }
})

deleteBtn.addEventListener("click", function () {
  newUl.childElementCount >0 ?
  newUl.removeChild(newUl.lastElementChild) : alert("There is no item to delete")
})