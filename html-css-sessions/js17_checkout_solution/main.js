const taxRate=0.18;
let shipping=15;
const freeShipping=300;

window.onload=function(){
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shipping", shipping);
    localStorage.setItem("freeShipping", freeShipping);
    totalProductCalculate()
}

document.querySelector("#products").addEventListener("click", (e)=> {
    if(e.target.className=="fa-solid fa-square-plus") {
        e.target.parentElement.querySelector("#p").innerText++
        productCalculate(e.target)
        totalProductCalculate()
    }else if(e.target.classList.contains("fa-square-minus")){
        if(e.target.parentElement.children[1].innerText>1){
            e.target.parentElement.children[1].innerText--
        productCalculate(e.target)
        totalProductCalculate()

        }else if(confirm(`${e.target.parentElement.parentElement.firstElementChild.innerText} 'i tamamen silinecek`)){
            e.target.closest("#section").remove()
            totalProductCalculate()
        }
    }else if(e.target.getAttribute("id")=="btn"){
        e.target.closest("#section").remove()
        totalProductCalculate()
    }
})

const productCalculate = (cal) => {
    
    const price =cal.closest("#article").children[1].querySelector("strong").innerText.slice(1)
    const productNumber= cal.parentElement.querySelector("#p").innerText
    cal.parentElement.parentElement.querySelector("#productTotal span").innerText="$"+ (price*productNumber).toFixed(2)
   
 
}

const totalProductCalculate = () => {
        const value =document.querySelectorAll("#productTotal span")
        let subTotal=0
        value.forEach((item)=> subTotal+=parseFloat(item.innerText.slice(1)))
        subTotal=subTotal.toFixed(2)
        document.querySelector("#p1 span").innerText="$"+subTotal
        let rate=document.querySelector("#p2 span").innerText.slice(1)
         rate=(subTotal * localStorage.getItem("taxRate")).toFixed(2)
         document.querySelector("#p2 span").innerText="$"+rate
         rate=parseFloat(rate)
        shipping=subTotal>0 && subTotal<300 ? parseFloat(localStorage.getItem("shipping")) : 0
        document.querySelector("#p3 span").innerText= "$"+shipping
        let tot =document.querySelector("#p4 span").innerText.slice(1)
        tot=Number(tot)
        subTotal=Number(subTotal)
        tot= (subTotal + shipping  +rate).toFixed(2)
        document.querySelector("#p4 span").innerText="$"+tot



}