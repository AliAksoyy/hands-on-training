
const btn = document.querySelector("#btn")
const input=document.querySelector("#input")
const total = document.querySelector("#total")
const completedNumber = document.querySelector("#completed")
const ul =document.querySelector("#ulLi")

let com=0
let tot =0
let todos =JSON.parse(localStorage.getItem("todos")) || []




console.log(todos);

btn.addEventListener("click", ()=> {
    if(!input.value) {
        ul.innerText="Lütfen inputu boş birakmayin"
    }else {
        const newTodo= {
            id: new Date().getTime(),
            text:input.value,
            completed:false
        }
        ali(newTodo)
        localStorage.setItem("tot", tot++)
        
        total.innerText=tot
        todos.push(newTodo)
        localStorage.setItem("todos", JSON.stringify(todos))
        input.value="" 
        console.log(todos)
        
    }
})
    const ali = (newTodo)=> {
        const {id,text,completed}=newTodo
        const li = document.createElement("li")
        li.id=id
        li.setAttribute("class", "d-flex w-100 justify-content-around align-items-center")
        
        const tikIcon=document.createElement("i")
        tikIcon.setAttribute("class", "fa-solid fa-check")
        const newP=document.createElement("p")
        newP.classList.add("mt-3")
        const newPContent = document.createTextNode(text)
        newP.appendChild(newPContent)
        li.appendChild(tikIcon)
        li.appendChild(newP)
        const deleteIcon = document.createElement("i")
        deleteIcon.setAttribute("class", "fa-solid fa-trash")
        li.appendChild(deleteIcon)
        ul.appendChild(li)
    }
    todos?.forEach((todo)=> {
        ali(todo)
    })

    document.querySelector("#ulLi").addEventListener("click", (e)=> {
        if(e.target.classList.contains("fa-trash")){
            e.target.parentElement.remove()
            todos =todos.filter((item)=>  item.id != e.target.parentElement.getAttribute("id"))
            localStorage.setItem("todos", JSON.stringify(todos))
           
        }else if(e.target.classList.contains("fa-check")) {
           
            e.target.nextElementSibling.classList.toggle("text-decoration-line-through")
            const ide = e.target.parentElement.getAttribute("id");
           
            todos.map((todo,i)=> {
                if(todo.id == ide) {
                   todos[i].completed = !todos[i].completed 
                }
            })
            localStorage.setItem("todos", JSON.stringify(todos))
            console.log(todos)
        }
            
    })   
            
        
    

    input.addEventListener("keydown", (e)=> {
        if(e.keyCode==13){
            btn.click()
        }
    })

    window.addEventListener("load", ()=> {
        input.focus()
        
    })




