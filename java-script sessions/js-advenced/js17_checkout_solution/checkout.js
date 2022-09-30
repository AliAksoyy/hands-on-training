
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
 const info= btn.closest(".product-info")

 const price = info.querySelector(".product-price strong").innerText
 const quantity = info.querySelector(".quantity").innerText
 info.lastElementChild.innerText = (price * quantity).toFixed(2)
 

}

const lineHesapla = function() {

 const fiyat =document.querySelectorAll(".product-line-price")
 let subtotal =0
  fiyat.forEach((div)=> {
    subtotal +=parseFloat(div.innerText)
    // console.log(subtotal)
  })
  console.log(subtotal)
  const tax  = localStorage.getItem("taxRate")
  const shipping = subtotal>0 && subtotal<localStorage.getItem("freeShipping") ? localStorage.getItem("shipping") : 0

document.querySelector("#cart-subtotal").innerText = subtotal.toFixed(2)

document.querySelector("#cart-tax").innerText = (subtotal *  parseFloat(tax)).toFixed(2)

document.querySelector("#cart-shipping").innerText = shipping
document.querySelector("#cart-total").innerText = parseFloat(subtotal + tax + shipping).toFixed(2);
}

