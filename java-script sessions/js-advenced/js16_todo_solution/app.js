const input = document.querySelector("#todo-input")
const btn = document.querySelector("#todo-button")

const ul = document.querySelector("#todo-ul")







btn.addEventListener("click", (e)=> {
     const newTodo = {
       id: new Date().getTime(),
       text: input.value,
       completed: false,
     };

          if(input.value.trim() === "") {
            alert("Please enter new todo")
          }
          creatEl(newTodo);
          todos.push(newTodo)
          console.log(todos)
          input.value= ""
       

})

function creatEl (newTodo) {
     const { id, completed, text } = newTodo;

  const ul = document.querySelector("#todo-ul")
  const li = document.createElement("li")
  li.id =id
// completed ? li.classList.add("checked") : ""

completed && li.classList.add("checked")

  const okIcon = document.createElement("i")
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon)
  const p = document.createElement("p")
  const texter = document.createTextNode(text)
  p.appendChild(texter)
console.log(texter)
  li.appendChild(p)
  const deleteIcon = document.createElement("i")
  deleteIcon.className = "fas fa-trash"
  li.appendChild(deleteIcon)

  ul.appendChild(li)

}
ul.addEventListener("click", (e)=> {
  
  if(e.target.classList.contains("fa-check")) {
  e.target.parentElement.classList.toggle("checked")
  }
  if(e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove()
  }
})


input.addEventListener("keydown", (e)=> {

  if(e.code == "Enter") {
    btn.click()
  }
  })


window.addEventListener("load", ()=> {
  input.focus()
})



































// !!!!!!!!!!!!!!!!!burdayız
// //* ======================================================
// //*                     TODO APP
// //* ======================================================

// //?Selectors
// const addBtn = document.getElementById("todo-button");
// const todoInput = document.getElementById("todo-input");
// const todoUl = document.getElementById("todo-ul");

// // todos dizisini localStorage'daki veriler ile guncelle
// //! eger localStroge'de todos adinda bir item bulunmaz ise bos array atamasi yap.
// let todos = JSON.parse(localStorage.getItem("TODOS")) || [];
// console.log(todos);

// const renderSavedTodos = () => {
//   todos.forEach((todo) => {
//     createListElement(todo);
//   });
// };

// renderSavedTodos();

// addBtn.addEventListener("click", () => {
//   if (todoInput.value.trim() === "") {
//     alert("PLease enter new todo");
//   } else {
//     const newTodo = {
//       id: new Date().getTime(),
//       completed: false,
//       text: todoInput.value,
//     };

//     //! yeni bir li elementi olusturup bunu DOM'a bas
//     createListElement(newTodo);

//     //?Yeni olusturulan todo'yu diziye sakla
//     todos.push(newTodo);

//     localStorage.setItem("TODOS", JSON.stringify(todos));
//     console.log(todos);
//     todoInput.value = "";
//   }
// });

// function createListElement(newTodo) {
//   const { id, completed, text } = newTodo; //!destr.

//   //? yeni bir li elementi olustur ve bu elemente obje icerisindeki
//   //? id degerini ve completed class'ini ata
//   const li = document.createElement("li");
//   // li.id = newTodo.id;
//   li.setAttribute("id", id);

//   // newTodo.completed ? li.classList.add("completed") : "";
//   completed && li.classList.add("checked");

//   //? okey ikonu olustur ve li elementine bagla
//   const okIcon = document.createElement("i");
//   okIcon.setAttribute("class", "fas fa-check");
//   li.appendChild(okIcon);

//   //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
//   const p = document.createElement("p");
//   const pTextNode = document.createTextNode(text);
//   p.appendChild(pTextNode);
//   li.appendChild(p);

//   //? delete ikonu olustur ve li elementine bagla
//   const deleteIcon = document.createElement("i");
//   deleteIcon.setAttribute("class", "fas fa-trash");
//   li.appendChild(deleteIcon);

//   console.log(li);
//   //? meydana gelen li elementini ul'ye child olarak ata
//   todoUl.appendChild(li);
// }

// //! Ul elementinin cocuklarindan herhangi birisinden bir event gelirse
// //! bunu tespit et ve gerekini yap. (Capturing)
// todoUl.addEventListener("click", (e) => {
//   console.log(e.target);

//   const id = e.target.parentElement.getAttribute("id");
//   //! event, bir delete butonundan geldi ise
//   if (e.target.classList.contains("fa-trash")) {
//     //? delete butonunun parent'ini DOM'dan sil
//     e.target.parentElement.remove();

//     //? Dizinin ilgili elementini sil
//     todos = todos.filter((todo) => todo.id !== Number(id));

//     //? todos dizisinin son halini localStorage'e sakla
//     localStorage.setItem("TODOS", JSON.stringify(todos));
//   } else if (e.target.classList.contains("fa-check")) {
//     //! event, bir okey butonundan geldi ise
//     //? ilgili li elementinde checked adinda bir class'i varsa bunu sil
//     //?  aksi takdirde ekle (DOM)
//     e.target.parentElement.classList.toggle("checked");

//     // todos dizisindeki ilgili elementin completed kismini guncelle
//     todos.map((todo, index) => {
//       if (todo.id == id) {
//         todos[index].completed = !todos[index].completed;
//       }
//     });
//     console.log(todos);

//     //?todos dizisinin son halini localStorage'e sakla
//     localStorage.setItem("TODOS", JSON.stringify(todos));
//   }
// });

// //? Enter tusu ile ekleme mumkun olsun
// todoInput.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     addBtn.click();
//   }
// });

// //? Baslangicta input aktif olsun
// window.onload = function () {
//   todoInput.focus();
// };
