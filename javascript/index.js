function updateTime(){
let brisbaneElement = document.querySelector("#brisbane");
let brisbaneDateElement = brisbaneElement.querySelector(".date");
let brisbaneTimeElement = brisbaneElement.querySelector(".time");
let brisbaneTime = moment().tz("Australia/Brisbane");

brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
brisbaneTimeElement.innerHTML = brisbaneTime.format("hh:mm:ss [<small>]A[</small>]");

let stockholmElement = document.querySelector("#stockholm");
let stockholmDateElement = stockholmElement.querySelector(".date");
let stockholmTimeElement = stockholmElement.querySelector(".time");
stockholmTime = moment().tz("Europe/Stockholm");

stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
stockholmTimeElement.innerHTML = stockholmTime.format("hh:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small> </div>
      </div>`;

}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);