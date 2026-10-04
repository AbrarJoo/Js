const citySelect = document.querySelector("#city-select");
const getWeatherBtn = document.querySelector("#get-weather-btn");

const weatherIcon = document.querySelector("#weather-icon");
const mainTemperature = document.querySelector("#main-temperature");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const windGust = document.querySelector("#wind-gust");
const weatherMain = document.querySelector("#weather-main");
const locationElement = document.querySelector("#location");

async function getWeather(city) {
  const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (data === undefined) {
    alert("Something went wrong, please try again later");
    return;
  }

  weatherIcon.src = data.weather[0].icon;

  mainTemperature.textContent = data.main.temp ?? "N/A";
  feelsLike.textContent = data.main.feels_like ?? "N/A";

  humidity.textContent = data.main.humidity ?? "N/A";
  wind.textContent = data.wind.speed ?? "N/A";
  windGust.textContent = data.wind.gust ?? "N/A";

  weatherMain.textContent = data.weather[0].main ?? "N/A";
  locationElement.textContent = data.name ?? "N/A";
}

getWeatherBtn.addEventListener("click", function () {
  const city = citySelect.value;

  if (city === "") {
    return;
  }

  showWeather(city);
});
