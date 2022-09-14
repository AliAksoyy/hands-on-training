
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
  }else if(langInput.value === "javascript")  {
 langInput.style.color ="red"
    }  else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = ""
  langInput.focus();

  }
})

deleteBtn.addEventListener("click", function () {
  newUl.childElementCount >0 ?
  newUl.removeChild(newUl.lastElementChild) : alert("There is no item to delete")
})


langInput.addEventListener("keydown", (event)=> {
  console.log(event)
  // console.log(event.target)
  // console.log(event.keyCode)
  // console.log(event.code)
  // console.log(event.key)

  if(event.keyCode ===13) {
    addBtn.click()
  }
  if(event.code === "Delete") {
    deleteBtn.click()
  }

})