//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        renderError(`Something went wrong: ${res.status}`);
        throw new Error();
      }
      return res.json();
    })
    .then((data) => renderCountries(data))
    .catch((err) => console.log(err));
};

const renderError = () => {
  const countryDiv = document.querySelector(".countries");
  countryDiv.innerHTML += `
    <h2>Countries can not fetched</h2>
    <img src="./img/404.png" alt="" />
  `;
};

const renderCountries = (data) => {
  console.log(data);
  const {capital, currencies, flags:{svg},languages, name: {common}} =data[0]
  const countryDiv = document.querySelector(".countries");

  countryDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${svg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${common}</h5>
        <p class="card-text">${data[0].region}.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item
        <i class="fas fa-lg fa-landmark"></i>${capital}
        </li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>


  `;
};

fetchCountryByName("turkey");

