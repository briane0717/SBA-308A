const apiKey = "f2a6c531b1f2d7fb41e1b03ee4c8c527";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data for a city
export async function getWeatherData(city) {
  try {
    const response = await fetch(
      `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
    );

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error("City not found or invalid.");
    }

    // Return the response as JSON
    return await response.json();
  } catch (error) {
    throw new Error("Could not fetch weather data");
  }
}
