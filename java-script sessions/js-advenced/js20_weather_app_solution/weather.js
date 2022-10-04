const input = document.querySelector("input")

const button = document.querySelector("button")

const msg = document.querySelector("form span")

const ul = document.querySelector(".cities")

const form = document.querySelector("form")

let res = {}

localStorage.setItem(
  "tokenKey",
"pc8YHOgPN1XTHnmt2lLm/vIGUAaGJFJ1vEABsIprjGvkdyLesISAotmAipoCW2bg"
);

// localStorage.setItem("tokenKey",EncryptStringAES("5bb1e360c88ace5e3a7f0c8cfe9a34d7"));

form.addEventListener("submit", (e)=> {
  e.preventDefault()
  fetchWeather()
  
})

  const  fetchWeather = async ()=> {

    const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
    
    const cityName = input.value;

    const units = "metric"

    const lang = "tr"
    

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${tokenKey}&units=${units}&lang=${lang}`


      try {
         res = await fetch(url)
          console.log(res)
          .then((res) => {
            if (!res.ok) {
              throw new Error("something went wrong");
            }
            return res.json();
          })
          .then((data) => {
            let newData = data;
            console.log(newData);
            const { main, sys, name, weather } = data;

            const icon1 = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

            console.log(icon1);

            const li = document.createElement("li");
            li.classList.add("city");

            const spans = ul.querySelectorAll(".city span")
            const spansArr = Array.from(spans)
            if(spansArr.length > 0) {
              const filterSpan = spansArr.filter((a)=> {
                return a.innerText == name
              })
              if(filterSpan.length >0) {
                msg.innerText = `sadasds ${name}`
                setTimeout(()=> {
                  msg.innerText = ""
                },5000)
                return
              }
            }

            li.innerHTML = `<h2 class="city-name" data-name="${name}">
                                 <span>${name}</span>
                                 <sup>${sys.country}</sup>
                          </h2>
                          <div class="city-temp"><sup>${Math.round(
                            main.temp
                          )}</sup></div>
                          <figure>
                                 <img class="city-icon" src="${icon1}">
                                 <figcaption>${
                                   weather[0].description
                                 }</figcaption>
                          </figure> `;
            ul.prepend(li);
          
          })   
      } catch (error) {
        console.log(error)
         msg.innerText = `${res.status}`;
         setTimeout(() => {
           msg.innerText = "";
         }, 5000);
      }
      form.reset()
  }
      













































// const form = document.querySelector("section.top-banner form");
// const input = document.querySelector(".container input");
// const msg = document.querySelector("span.msg");
// const list = document.querySelector(".ajax-section ul.cities");

// // localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));

// localStorage.setItem(
//   "tokenKey",
//   "RAPAIooyOVFdRNn7gPi6i8vUp3OJvy0Np5wgMGgNO0a2a258kya95/arqJmhPrWc"
// );

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   getWeatherDataFromApi();
// });

// //Api Get func. (http methods == Verbs)
// const getWeatherDataFromApi = async () => {
//   //alert("http request is gone!");
//   const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
//   //alert(tokenKey);
//   const inputValue = input.value;
//   const units = "metric";
//   const lang = "tr";
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

//   try {
//     // const response = await fetch(url).then(response => response.json());
//     const response = await axios(url);
//     console.log(response);
//     //obj destr.
//     const { main, sys, weather, name } = response.data;

//     const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
//     const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

//     const cityNameSpans = list.querySelectorAll(".city span");
//     const cityNameSpansArray = Array.from(cityNameSpans);
//     if (cityNameSpansArray.length > 0) {
//       const filteredArray = cityNameSpansArray.filter(
//         (span) => span.innerText == name
//       );
//       if (filteredArray.length > 0) {
//         msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
//         setTimeout(() => {
//           msg.innerText = "";
//         }, 5000);
//         form.reset();
//         return;
//       }
//     }
//     //console.log(cityNameSpans);
//     const createdLi = document.createElement("li");
//     createdLi.classList.add("city");
//     createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${
//       sys.country
//     }">
//                                 <span>${name}</span>
//                                 <sup>${sys.country}</sup>
//                             </h2>
//                             <div class="city-temp">${Math.round(
//                               main.temp
//                             )}<sup>°C</sup></div>
//                             <figure>
//                                 <img class="city-icon" src="${iconUrl}">
//                                 <figcaption>${
//                                   weather[0].description
//                                 }</figcaption>
//                             </figure>`;
//     //append vs. prepend
//     list.prepend(createdLi);

//     //Capturing
//     // createdLi.addEventListener("click", (e)=>{
//     //     if(e.target.tagName == "IMG"){
//     //         e.target.src = (e.target.src == iconUrl) ? iconUrlAWS : iconUrl;
//     //     }
//     // });

//     //Bubbling
//     // createdLi.addEventListener("click", (e)=>{
//     //     alert(`LI element is clicked!!`);
//     //     window.location.href = "https://clarusway.com";
//     // });
//     // createdLi.querySelector("figure").addEventListener("click", (e)=>{
//     //     alert(`FIGURE element is clicked!!`);
//     //     //STOP BUBBLING
//     //     //e.stopPropagation();
//     //     // window.location.href = "https://clarusway.com";
//     // });
//     // createdLi.querySelector("img").addEventListener("click", (e)=>{
//     //     alert(`IMG element is clicked!!`);
//     //     // window.location.href = "https://clarusway.com";
//     // });
//   } catch (error) {
//     console.log(error);
//     msg.innerText = `404 (City Not Found)`;
//     setTimeout(() => {
//       msg.innerText = "";
//     }, 5000);
//   }
//   form.reset();
// };
// //window onload
// // document.querySelector(".cities").addEventListener("click", (e) => {
// //     if (e.target.tagName == "IMG") {
// //         alert("img is clicked!!!")
// //     }
// // }
// // )
