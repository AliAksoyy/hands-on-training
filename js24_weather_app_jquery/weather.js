// const formJS=document.querySelectorAll("form")
// const formJq=jQuery("form").eq(0)
const formJquery=$("form").eq(0)
const inputJQ=$(".top-banner input")
const msgJQ=$(".top-banner span").eq(0)
const listJQ=$(".cities").eq(0)
console.log(inputJQ)


$(window).on("load",()=> {
    console.log("ali")
})

$(document).ready(()=> {
    console.log("beyda");
})

formJquery.on("submit", (e)=> {
    e.preventDefault()
    getWeatherDataFormApi()
})

const getWeatherDataFormApi =() => {
    
}