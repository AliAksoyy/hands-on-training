console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------


      const h1 = document.getElementById("header");
      console.log(h1);
      h1.style.color = "white";
      h1.style.background = "red"

     const myinput =  document.getElementById("input")
      const button = document.getElementById("btn")

      button.style.background = "black",
      button.style.color = "white";
      button.style.width = "7rem";
      button.style.borderRadius = "10px";
      button.style.padding = "1rem";
      myinput.style.padding = "1rem";

      const list = document.getElementsByTagName("li");
      console.log(list)
      list[2].style.color = "red"
      const elementThree = list.item(3);
      elementThree.style.color = "blue"
      elementThree.textContent = "React / Vue / Angular"

      list[4].innerText = "Django /Flask"
      console.log(list[1].textContent)
      console.log(list[1].innerHTML)
     
    const myList = document.getElementsByClassName("list")
console.log(myList[0].innerText)

const myListArray = Array.from(myList)
myListArray.forEach((item) => console.log(item.innerText));
[...myList].forEach((a)=> console.log(a.innerText));

[...myList].forEach((k)=> console.log(k.style.color = "red"));


const myLi =document.querySelector("li")
console.log(myLi.innertext)
myLi.style.color = "yellowgreen";

const itemList = document.querySelector(".item-list")
itemList.style.background = "grey;"
const input = document.querySelector("#input");
console.log(input.value)
document.querySelector("#btn").style.cursor = "pointer"

const itemH2 = document.querySelector(".item-list h2")
itemH2.style.color ="purple"

const myBtn = document.querySelector("input[type='button']")
console.log(myBtn)

const lists = document.querySelectorAll("ul li")

console.log(lists)

lists.forEach((li) => console.log(li.innerText));
console.log(document.querySelectorAll("section ul li:nth-child(4)")[0].innerText)

