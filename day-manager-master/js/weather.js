/*  
  id: openAPIgetter
  pw: APIgetter
  "latitude":36.4445696,"longitude":126.7924992
  https://api.openweathermap.org/data/2.5/weather?lat=36.4445696&lon=126.7924992&appid=3e3180103d0da92c4295b12535d090a9
*/
const weather = document.querySelector(".js-weather");

const API_KEYS = "3e3180103d0da92c4295b12535d090a9";
const COORDS = "coords";

function savePosition(COORDS_obj) {
  localStorage.setItem(COORDS, JSON.stringify(COORDS_obj));
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `place [ ${place} ] & ${temperature}℃`;
    });
}

function successGetPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsobj = {
    latitude,
    longitude
  };
  savePosition(coordsobj);
  getWeather(latitude, longitude);
}

function errorGetPosition() {
  console.error("cant access the geolocation");
}

function askForAccess() {
  navigator.geolocation.getCurrentPosition(
    successGetPosition,
    errorGetPosition
  );
}

function whetherForPosition() {
  const localName = localStorage.getItem(COORDS);
  if (localName === null) {
    askForAccess();
  } else {
    const parsedCoords = JSON.parse(localName);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  whetherForPosition();
}
init();
