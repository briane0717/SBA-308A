import { getWeatherData } from "./weatherAPI.js";
import { displayWeatherData, displayError } from "./ui.js";

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// Handle form submission
weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    try {
      // Fetch weather data for the city
      const weatherData = await getWeatherData(city);
      displayWeatherData(weatherData); // Display the weather data
    } catch (error) {
      displayError("Could not fetch weather data. Please try again."); // Display error
    }
  } else {
    displayError("Please enter a city."); // If no city is entered, show error
  }
});
