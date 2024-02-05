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

updateTime();
setInterval(updateTime, 1000);