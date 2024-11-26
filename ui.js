// Function to display weather data on the page
export function displayWeatherData(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  const card = document.querySelector(".card");

  card.textContent = ""; // Clear the card content
  card.style.display = "flex"; // Show the card

  // Create elements to display weather data
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descriptionDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  // Populate the created elements with weather data
  cityDisplay.textContent = city;
  tempDisplay.textContent = `${temp}°C`; // Display temperature in Celsius
  humidityDisplay.textContent = `${humidity}% humidity`;
  descriptionDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  // Add CSS classes for styling
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descriptionDisplay.classList.add("descriptionDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  // Append the elements to the card
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descriptionDisplay);
  card.appendChild(weatherEmoji);
}

// Function to display an error message on the page
export function displayError(message) {
  const card = document.querySelector(".card");
  card.textContent = ""; // Clear any existing content
  card.style.display = "flex"; // Show the card

  // Create and append error message
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  card.appendChild(errorDisplay);
}

// Function to return an emoji based on weather conditions
function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId <= 232:
      return "⛈️"; // Thunderstorm
    case weatherId >= 300 && weatherId <= 321:
      return "🌦️"; // Drizzle
    case weatherId >= 500 && weatherId <= 531:
      return "🌧️"; // Rain
    case weatherId >= 600 && weatherId <= 622:
      return "☃️"; // Snow
    case weatherId >= 701 && weatherId <= 781:
      return "🌪️"; // Atmospheric phenomenon (e.g., fog)
    case weatherId === 800:
      return "😎"; // Clear sky
    case weatherId >= 801 && weatherId <= 804:
      return "☁️"; // Clouds
    default:
      return "❓"; // Unknown weather
  }
}
