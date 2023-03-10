const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "9929bb2338a94bb595019ca6aa05491f";

function onGeoOk(position) {
  console.log(position, "position");
  //   const lat = position.coords.latitude;
  //   const lon = position.coords.longitude;
  const { latitude, longitude } = position.coords;
  //   console.log(lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `@${data.name} |`;
      weather.innerText = `${data.weather[0].main} | ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
