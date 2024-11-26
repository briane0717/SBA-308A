const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "f2a6c531b1f2d7fb41e1b03ee4c8c527";
weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
});
