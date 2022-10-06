let currentTime =
  document.querySelector("#day-time");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();
currentTime.innerHTML = `${day}, ${hour}:${minutes}`;

function showWeatherCondition(
  response
) {
  document.querySelector(
    "#city"
  ).innerHTML = response.data.name;
  document.querySelector(
    "#current-temperature"
  ).innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML =
    response.data.main.humidity;
  document.querySelector(
    "#wind"
  ).innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey =
    "0d206f601e5e6e86a658ffd9322e991a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios
    .get(`${apiUrl}`)
    .then(showWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(
    "#input-city"
  ).value;
  search(city);
}

let form =
  document.querySelector("form");
form.addEventListener(
  "submit",
  handleSubmit
);

search("New York");
