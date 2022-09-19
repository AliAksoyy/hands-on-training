//* ======================================================
//*                     TODO APP
//* ======================================================
// selectors
const addBtn = document.querySelector("#todo-button")
const todoInput = document.getElementById("todo-input")
const todoUl = document.querySelector("#todo-ul")

// evetn add

addBtn.addEventListener("click", function() {

    if(todoInput.value.trim() === "") {
        alert("Please enter new ToDo")
    }else {
        console.log(todoInput.value)
    }
})