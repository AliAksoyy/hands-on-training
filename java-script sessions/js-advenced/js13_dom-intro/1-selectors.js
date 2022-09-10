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
      list[4].innerHTML = "<a href="https://www.clarusway.com"> clarusway</a>
