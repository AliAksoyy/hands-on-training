const list = document.querySelector(".list")
console.log(list.parentNode)
const  ul = list.parentNode
console.log(list.parentElement)


console.log(list.closest("main"))

const addItem = document.querySelector(".add-item")
console.log(addItem.children)

// const h2 = addItem.children[0]
console.log(addItem.firstChild)
// h2.getElementsByClassName.color = "blue"

// console.log(addItem.parentNode.parentNode.children[0])


const myL = ul.children
console.log(myL)

const java = myL[2]
console.log(java.innerText)
java.innerHTML = "JAVA"

const css = java.previousElementSibling
console.log(css.innerText)