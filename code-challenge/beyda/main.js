const input =document.querySelector("#input")
const btn=document.querySelector("#btn")
const ul=document.querySelector("#ulLi")

let arr=JSON.parse(localStorage.getItem("todos")) || []




btn.addEventListener("click", () => {
    if(!input.value){
        ul.textContent="Lütfen birşeyler giriniz"
        setTimeout(() => {
        ul.textContent=""  
        }, 2000);
    }else {
        const newTodo = {
            id:new Date().getTime(),
            text:input.value,
            completed:false
        }
        ekleme(newTodo)
        arr.push(newTodo)
        console.log(arr)
        localStorage.setItem("todos", JSON.stringify(arr))

        input.value=""
    }
})

const ekleme= (newTodo)=> {
    const {id,completed,text}=newTodo
    const li = document.createElement("li")
    li.id=id
    li.className="li"
    li.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    <p>${text}</p>
                    <i class="fa-solid fa-trash"></i>
    `
    ul.appendChild(li)
}
arr.forEach((item)=> {
    ekleme(item)
})

ul.addEventListener("click", (e)=> {

    if(e.target.classList.contains("fa-trash")){
        e.target.parentElement.remove()
        arr =arr.filter((item)=> item.id !=e.target.parentElement.getAttribute("id"))
        localStorage.setItem("todos", JSON.stringify(arr))
        console.log(arr);

    }else if(e.target.classList.contains("fa-check")){
    e.target.nextElementSibling.classList.toggle("text-decoration-line-through")
    arr.map((item)=> {
        if(item.id==e.target.parentElement.getAttribute("id")){
          item.completed=!item.completed
        }
    })
    localStorage.setItem("todos", JSON.stringify(arr))
    }
    

    
})

input.addEventListener("keydown", (e)=> {
    if(e.keyCode==13){
        btn.click()
    }
})
window.onload=function(){
    input.focus()
}

