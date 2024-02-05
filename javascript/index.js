function updateTime() {
  let brisbaneElement = document.querySelector("#brisbane");
  if (brisbaneElement) {
    let brisbaneDateElement = brisbaneElement.querySelector(".date");
    let brisbaneTimeElement = brisbaneElement.querySelector(".time");
    let brisbaneTime = moment().tz("Australia/Brisbane");

    brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
    brisbaneTimeElement.innerHTML = brisbaneTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    singaporeTime = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  function updateCityTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )} <small>${cityTime.format("A")}</small> </div>
    </div>
    <div>
<a id="homepage" href="/">Back to all contries 🌎</a> 
</div> 
`;
  }
  setInterval(updateCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
