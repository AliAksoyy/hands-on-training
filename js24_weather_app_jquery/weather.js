const formJS=document.querySelectorAll("form")
// const formJq=jQuery("form").eq(0)
const formJquery=$("form").eq(0)
const inputJQ=$(".top-banner input").eq(0)
const msgJQ=$(".top-banner span").eq(0)
const listJQ=$(".cities").eq(0)
console.log(inputJQ)


// $(window).on("load",()=> {
   
// })

$(document).ready(()=> {
  
    localStorage.setItem("apiKey", "pc8YHOgPN1XTHnmt2lLm/vIGUAaGJFJ1vEABsIprjGvkdyLesISAotmAipoCW2bg")
    
})

formJquery.on("submit", (e)=> {
    e.preventDefault()
    getWeatherDataFormApi()
})

const getWeatherDataFormApi =() => {
    const apiKey=DecryptStringAES(localStorage.getItem("apiKey"))
    const cityName =inputJQ.val()
    const units="metric"
    const lang="tr"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`
    $.ajax({
        type:"GET",
        url:url,
        dataType: "json",
        success: (res) =>{
            getRes(res)
            formJS[0].reset()
        },
        beforeSend:(req) => {},
        complete: ()=> {},
        error: (XMLHttpsRequest)=> {
            console.log(XMLHttpsRequest);
        }
    })
}

function getRes(ali){
    const {name,weather}=ali

    const cityCardList=listJQ.find(".city")
    console.log(cityCardList);
    const cityArr = cityCardList.get()
    console.log(cityArr)

    if(cityArr.length>0){
       const filterArr=
       cityArr.filter((li)=> $(li).find("span").text()== name)
       if(filterArr.length>0){
        msgJQ.text("kardeş yapma")
        return
       }
    }
    const createdLi = $(`<li></li>`)
    createdLi.addClass("city");
    createdLi.html(`
    <h2>${name}</h2>
    <h2>${weather[0].description}</h2>

    `)
    listJQ.append(createdLi)
}