
// let taxRate = 0.18
// let shipping =15
// let freeShipping = 300

// window.addEventListener("load",function() {
//   localStorage.setItem("taxRate", taxRate)
//   localStorage.setItem("shipping",shipping)
//   localStorage.setItem("freeShipping",freeShipping)
// })


document.querySelector(".products").addEventListener("click",(e)=> {

  if(e.target.className == "fa-solid fa-plus") {
    e.target.previousElementSibling.innerText++
    hesapla(e.target)
    lineHesapla();

  }else if(e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
    }else {
      if(confirm("Are you sure")) {
        e.target.closest(".product").remove()
      }
    }
     hesapla(e.target);
     lineHesapla();
  }else if(e.target.className == "remove-product") {
    e.target.closest(".product").remove()
    lineHesapla()
  }
})

function hesapla(btn) {
  const product = btn.parentElement.parentElement.parentElement


  
}






const lineHesapla = function() {


}