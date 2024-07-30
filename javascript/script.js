// Variables and elements selector
const apiKey = "5dd3851bd1d56a1f0f2f663350aaafce";
const apiUnsplashKey = "Ct0VJwj1Ia5x1W9wZsBYEZsJJGkUM4ZxFxpqC52HVZQ";

const cityInput = document.querySelector("#getCityName");
const searchBtn = document.querySelector("#search");

const city_display = document.querySelector("#city_display");
const country_img = document.querySelector("#country");
const temp_display = document.querySelector("#temp_display");
const description_display = document.querySelector("#description_display");
const weather_img = document.querySelector("#weather_img");
const humidity_display = document.querySelector("#humidity_display");
const wind_display = document.querySelector("#wind_display");

const weatherDataContainer = document.querySelector(".weather-data");

const suggestionsContainer = document.querySelector(".suggestions-container");
const loaderContainer = document.querySelector(".loader-container");
const errorMessage = document.querySelector(".errorMessage");
const tempSwitch = document.querySelector("#temp_switch");

createSuggestions();
const suggestionsButtons = document.querySelectorAll(".suggestions-button");

// Create buttons for the suggestions container
function createSuggestions() {
  const cities = [
    // Cidades brasileiras
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Recife",
    "Porto Alegre",
    "Belém",
    "Goiânia",
    "Guarulhos",
    "Campinas",
    "São Luís",
    "São Gonçalo",
    "Maceió",
    "Duque de Caxias",
    "Natal",
    "Teresina",
    "Campo Grande",
    "Nova Iguaçu",
    "São Bernardo do Campo",
    "João Pessoa",
    "Santo André",
    "Osasco",
    "Ribeirão Preto",
    "Jaboatão dos Guararapes",
    "Uberlândia",
    "Contagem",
    "Aracaju",
    "Sorocaba",
    "Feira de Santana",
    "Cuiabá",
    "Joinville",
    "Aparecida de Goiânia",
    "Juiz de Fora",
    "Londrina",
    "Ananindeua",
    "Niterói",

    // Cidades internacionais
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Hong Kong",
    "Singapore",
    "Shanghai",
    "Los Angeles",
    "Chicago",
    "Beijing",
    "Mumbai",
    "Moscow",
    "Istanbul",
    "Seoul",
    "Bangkok",
    "Sydney",
    "Dubai",
    "Toronto",
    "San Francisco",
    "Melbourne",
    "Jakarta",
    "Buenos Aires",
    "Cairo",
    "Mexico City",
    "Kuala Lumpur",
    "Madrid",
    "Rome",
    "Barcelona",
    "Lagos",
    "Chennai",
    "São Francisco",
    "Munich",
    "Berlin",
    "Johannesburg",
    "Zurich",
    "Frankfurt",
    "Amsterdam",
    "Brussels",
    "Dublin",
    "Vienna",
    "Prague",
    "Warsaw",
    "Lisbon",
    "Stockholm",
    "Budapest",
    "Copenhagen",
    "Oslo",
    "Helsinki",
    "Athens",
    "Brisbane",
    "Tel Aviv",
    "Santiago",
    "Lima",
    "Bogotá",
    "Caracas",
    "Riyadh",
    "Bangkok",
    "Tehran",
    "Baghdad",
    "Algiers",
    "Nairobi",
    "Karachi",
    "Lahore",
    "Riyadh",
    "Jeddah",
    "Dubai",
    "Abu Dhabi",
    "Cape Town",
    "Casablanca",
    "Hanoi",
    "Manila",
    "Ho Chi Minh City",
    "Rangoon",
    "Jakarta",
    "Dhaka",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Chongqing",
    "Chengdu",
    "Tianjin",
    "Guangzhou",
    "Shenzhen",
    "Wuhan",
    "Hangzhou",
    "Dongguan",
    "Foshan",
    "Chongqing",
    "Nanjing",
    "Changsha",
    "Xi'an",
    "Zhengzhou",
    "Shenyang",
    "Shijiazhuang",
    "Suzhou",
    "Qingdao",
    "Dalian",
    "Kunming",
    "Changchun",
    "Taipei",
    "Taichung",
    "Kaohsiung",
    "Sapporo",
    "Fukuoka",
    "Kyoto",
    "Kobe",
    "Osaka",
    "Nagoya",
    "Hiroshima",
    "Sendai",
    "Yokohama",
    "Fukuoka",
    "Kyoto",
    "Nagoya",
    "Osaka",
    "Hiroshima",
    "Sapporo",
    "Sendai",
    "Kawasaki",
    "Saitama",
    "Kitakyushu",
    "Kobe",
    "Fukuoka",
    "Kyoto",
    "Nagoya",
    "Osaka",
    "Hiroshima",
    "Sapporo",
    "Sendai",
    "Kawasaki",
    "Saitama",
    "Kitakyushu",
    "Valencia",
    "Seville",
    "Bilbao",
    "Malaga",
    "Alicante",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Bordeaux",
    "Lille",
    "Rennes",
    "Reims",
    "Le Havre",
    "Saint-Étienne",
    "Toulon",
    "Grenoble",
    "Dijon",
  ];

  // Repete 8 vezes
  const numberOfButtons = 8;
  for (let i = 0; i < numberOfButtons; i++) {
    // Seleciona uma cidade aleatoriamente e depois remove-a da lista para evitar repetição
    const randomIndex = Math.floor(Math.random() * cities.length);
    const selectedCity = cities[randomIndex];
    cities.splice(cities.indexOf(selectedCity), 1);

    // Cria um botão
    const newButton = document.createElement("button");
    newButton.classList.add("suggestions-button");
    newButton.textContent = selectedCity;
    suggestionsContainer.appendChild(newButton);
  }
}

// Add a background for weather container
let weatherDescription;
function weatherContainerBackground(key) {
  weatherDataContainer.classList.remove(weatherDescription);
  weatherDescription = "";

  switch (key) {
    case "01d":
      weatherDescription = "clear-sky-day";
      break;
    case "01n":
      weatherDescription = "clear-sky-night";
      break;
    case "02d":
      weatherDescription = "few-clouds-day";
      break;
    case "02n":
      weatherDescription = "few-clouds-night";
      break;
    case "03d" || "03n":
      weatherDescription = "scattered-clouds";
      break;
    case "04d" || "04n":
      weatherDescription = "broken-clouds";
      break;
    case "09d" || "09n":
      weatherDescription = "drizzle";
      break;
    case "10d":
      weatherDescription = "rain-day";
      break;
    case "10n":
      weatherDescription = "rain-night";
      break;
    case "11d" || "11n":
      weatherDescription = "thunderstorm";
      break;
    case "13d" || "13n":
      weatherDescription = "snow";
      break;
    case "50d" || "50n":
      weatherDescription = "mist";
      break;
  }

  weatherDataContainer.classList.add(weatherDescription);
}

// Switch measure
function switchMeasure() {
  const measure_display = document.querySelector("#measure_display");
  let measure = "";
  let temp = temp_display.textContent;
  if (tempSwitch.checked) {
    measure = "F";
    temp = temp * 1.8 + 32;
  } else {
    measure = "C";
    temp = (temp - 32) / 1.8;
  }
  measure_display.textContent = measure;
  temp_display.textContent = Math.round(temp);
}

// Toggle loader
function toggleLoader() {
  loaderContainer.classList.toggle("hide");
}

// Error handling
function showErrorMessage() {
  errorMessage.classList.remove("hide");
  weatherDataContainer.classList.add("hide");
}

function hideInformation() {
  weatherDataContainer.classList.add("hide");
  suggestionsContainer.classList.add("hide");
  errorMessage.classList.add("hide");
}

// Add image to website background using unsplash API
async function addBackground(city) {
  try {
    const url = `https://api.unsplash.com/photos/random?query={${city}}&client_id=${apiUnsplashKey}`;
    const response = await fetch(url);
    const data = await response.json();
    document.body.style.backgroundImage = `url(${data.urls.full})`;
  } catch {
    console.log("Não foi possível encontrar uma imagem desta cidade.");
  }
}

function getCityName() {
  const city = cityInput.value;
  getWeatherData(city);
}

const getWeatherData = async (city) => {
  hideInformation();
  toggleLoader();
  try {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const response = await fetch(apiWeatherUrl);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    await addBackground(data.name);
    showWeatherData(data);
  } catch {
    showErrorMessage();
  }
  toggleLoader();
};

const showWeatherData = (data) => {
  const apiCountryUrl = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
  const weatherImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const {
    name: cityName,
    main: { temp: temperature, humidity: humidity },
    weather: [{ description: weatherDescription }],
    wind: { speed: wind },
  } = data;

  city_display.textContent = cityName;
  country_img.src = apiCountryUrl;
  temp_display.textContent = temperature.toFixed(1);
  description_display.textContent = weatherDescription;
  weather_img.src = weatherImg;
  humidity_display.textContent = humidity;
  wind_display.textContent = wind * 3.6;

  weatherContainerBackground(data.weather[0].icon);
  weatherDataContainer.classList.remove("hide");
};

// Events
searchBtn.addEventListener("click", (e) => {
  // Evita o envio do formulário
  e.preventDefault();

  getCityName();
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getCityName();
  }
});

suggestionsButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const city = event.target.textContent;
    getWeatherData(city);
  });
});

tempSwitch.addEventListener("click", switchMeasure);
