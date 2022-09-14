
const h1 = document.getElementById("header")
h1.style.color = "white"
h1.style.background = "red"
console.log(h1)

document.getElementById("input").style.background = "black"
document.getElementById("btn").style.color = "white"


const list = document.getElementsByTagName("li")
console.log(list)
list[2].style.color = "red"
list.item(3).style.color = "blue"
const elementThree = list.item(3)
elementThree.textContent = "react / vue / angular"

list[4].innerText = "Django / Flask"
console.log(list[1].textContent)
console.log(list[1].innerText)
list[4].innerHTML = '<a href="www.https://clarusway.com">ClarusWay Web</a>'
console.log(list[4])

const myList = document.getElementsByClassName("list")
console.log(myList[0].innerText)

const myArr = Array.from(myList)
console.log(myArr)
myArr.forEach((k) => console.log(k.innerText))


// [...myList].forEach((a) => console.log(a.innerText))