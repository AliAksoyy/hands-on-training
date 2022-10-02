
// ?444444444444444444444444444444!
// //*========================================
// //*             3- FETCH API
// //*========================================

// //? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
// //? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
// //? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
// //? gelmektedir.

// //? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
// //? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

const url = "https://api.github.com/users";

fetch(url).then(function(res) {
  console.log(res)
  if(!res.ok) {
    throw new Error("hata")

  }
  return res.json()
}).then(data => {
  console.log(data)
  render(data)
})
.catch(function(err) {
  console.log(err)
})

const render = (users)=> {
  const ali = document.querySelector(".users");

  console.log(users);
  users.forEach((user) => {

     ali.innerHTML += `
    <h2>${user.login}</h2>

  `;
    
  });


   
}









// let userData;
// fetch("https://api.github.com/users")
//   .then((res) => {
//     console.log(res);
//     //! Error handling
//     if (!res.ok) {
//       throw new Error("Something went wrong");
//     }
//     return res.json();
//   })
//   .then((data) => updateDOM(data))
//   .catch((hata) => console.log(hata));

// // console.log(userData);

// const updateDOM = (users) => {
//   console.log(users);
//   const userDiv = document.querySelector(".users");
//   users.forEach((user) => {
//     const { login, avatar_url, following_url } = user;
//     userDiv.innerHTML += ` <h2>${login}</h2>
//     <img src="${avatar_url}" width="300px" alt="" />
//     `;
//   });
// };
