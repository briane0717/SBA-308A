const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "f2a6c531b1f2d7fb41e1b03ee4c8c527";
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      displayError("Could not fetch weather data");
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {}

function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
