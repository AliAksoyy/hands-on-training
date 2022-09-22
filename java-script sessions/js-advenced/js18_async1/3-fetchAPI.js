//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");
// let userdata;
fetch("https://api.github.com/users")
.then((res)=> {
    console.log(res)
    if(!res.ok) {
        throw new Error("Something went wrong")
    }
   return res.json()})
.then((data)=> (updateDOM(data)))
.catch((err)=> console.log(err))

const updateDom = (users)=> {
    console.log(users)
}
const userDiv = document.querySelector(".users")

