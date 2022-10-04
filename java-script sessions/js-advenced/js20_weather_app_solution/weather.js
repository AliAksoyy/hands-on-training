const formJQ = $("form").eq(0)
const inputJQ = $(".top-banner input").eq(0)
const msgJQ = $(".top-banner span").eq(0)
const listJQ = $(".cities").eq(0)

$(window).on("load", function() {})

$(document).ready(()=>{
  console.log("DOMCONTENTLOADED")
})

formJQ.on("submit", (e)=>{
  e.preventDefault()
  getWeatherDataFromApi()
})

formJQ.submit((e)=> {
  e.preventDefault()
  getWeatherDataFromApi()
})

const getWeatherDataFromApi = ()=> {
  console.log("ajax func")
}
