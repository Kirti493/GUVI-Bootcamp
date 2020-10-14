const div = document.createElement("div");
div.classList.add("container-fluid");
document.body.append(div);

const row = document.createElement("div");
div.classList.add("row");
div.append(row);

const cont = document.querySelector('.row');

// Rest-Countries API
async function showApi(){
    const country = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await country.json();
    console.log(data);
    let html = " ";
    data.forEach(country => {
        html += 
        `<div class="card col-sm-12 col-md-3 col-lg-3" style="width: 18rem;">
        <div class="card-header">
        <h4>${country.name}</h4>
        </div>
        <img class="card-img-top" src="${country.flag}" alt="Card image cap">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital: ${country.capital}</li>
          <li class="list-group-item">Region:  ${country.region}</li>
          <li class="list-group-item">Latitude & Longitude:  ${country.latlng}</li>
          <li class="list-group-item">Country Code: ${country.cioc}</li>
        </ul>
        <div class="card-body">
          <button class= "btn btn-primary" onclick="myFunc()"> Click for Weather </button>
        </div>
      </div>`
      
    });
    cont.innerHTML = html;
}


showApi();


