const form = document.querySelector("section.top-banner form")
const input = document.querySelector("..container input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section ul")


localStorage.setItem("tokenKey", "5bb1e360c88ace5e3a7f0c8cfe9a34d7");



form.addEventListener("submit", (e)=> {
  e.preventDefault()
  getWeatherDataFromApi()
})

const getWeatherDataFromApi = () => {
 console.log("ali")


}



