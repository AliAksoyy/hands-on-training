
const btn = document.querySelector("#btn")
const input=document.querySelector("#input")
const total = document.querySelector("#total")
const completedNumber = document.querySelector("#completed")
const ul =document.querySelector("#ulLi")



btn.addEventListener("click", ()=> {


    
    
    if(!input.value) {
        ul.innerText="Lütfen inputu boş birakmayin"
    }else {

        const newTodo= {
            id: new Date().getTime(),
            text:input.value,
            completed:false
        }
        
        const li = document.createElement("li")
        li.id=newObj.id
        li.setAttribute("class", "d-flex w-100 justify-content-around align-items-center")
        const tikIcon=document.createElement("i")
        tikIcon.setAttribute("class", "fa-solid fa-check")
        const newP=document.createElement("p")
        newP.classList.add("mt-3")
        const newPContent = document.createTextNode(`${input.value}`)
        newP.appendChild(newPContent)
        li.appendChild(tikIcon)
        li.appendChild(newP)
        const deleteIcon = document.createElement("i")
        deleteIcon.setAttribute("class", "fa-solid fa-trash")
        li.appendChild(deleteIcon)
        ul.appendChild(li)
        input.value=""
        newArr.push({id:new Date().getTime(), content:input.value, completed:false})
    }
console.log(newArr)
    
})
// parentElement.classList.toggle("text-decoration-line-through")



