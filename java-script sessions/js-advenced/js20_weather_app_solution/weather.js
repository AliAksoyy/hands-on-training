const form = document.querySelector("section.top-banner form")
const input = document.querySelector(".container input")
const msg = document.querySelector("span.msg")
const list = document.querySelector(".ajax-section ul")


localStorage.setItem("tokenKey", "pc8YHOgPN1XTHnmt2lLm/vIGUAaGJFJ1vEABsIprjGvkdyLesISAotmAipoCW2bg");

// localStorage.setItem("tokenKeyEncrypted", EncryptStringAES("5bb1e360c88ace5e3a7f0c8cfe9a34d7"))



form.addEventListener("submit", (e)=> {
  e.preventDefault()
  getWeatherDataFromApi()
})

const getWeatherDataFromApi = async() => {
  const tokenKey = DecryptStringAES(localStorage.getItem("tokenKey"));
  const inputValue = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang${lang}`;

  const res = await fetch(url);

  const data = await res.json();

  const { main, sys, weather, name } = data;

  const iconUrl = ` http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const createdLi = document.createElement("li");
  createdLi.classList.add("city");
  createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country }">
                                <span>${name}</span>
                                <sup>${sys.country}</sup>
                            </h2>
                            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${weather[0].description}</figcaption>
                            </figure>`;
  //append vs. prepend
  list.prepend(createdLi);

  console.log(data);
}



