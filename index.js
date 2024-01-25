// Weather APP

// Selecting elements from the DOM
const weatherForm = document.querySelector(".weatherForm"); // Form element for weather input
const cityInput = document.querySelector(".cityInput"); // Input element for city name
const card = document.querySelector(".card"); // Container for displaying weather information
const apiKey = "87590f92c20cc1c2239f7e4322e0a58e"; // API key for weather data service

// Add event listener for the form submission
weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); // Prevent default form submission behavior

    const city = cityInput.value; // Get the city name from the input field

    // Check if the city input is not empty
    if(city){
        try {
            // Fetch weather data for the entered city and display it
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch(error) {
            // Log and display errors if fetching weather data fails
            console.error(error);
            displayError(error);
        }
    } else {
        // Display an error message if no city is entered
        displayError("Please enter a city");
    }
});

// Function to fetch weather data from the API
async function getWeatherData(city) {
    // Constructing the API URL with the city name and API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetching data from the API
    const response = await fetch(apiUrl);

    // Check if the response is successful
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    // Returning the JSON response
    return await response.json();
}

// Function to display weather information
function displayWeatherInfo(data) {
    // Destructuring the relevant data from the API response
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    // Clearing previous content and setting up the card for display
    card.textContent = "";
    card.style.display = "flex";

    // Creating HTML elements for each piece of weather data
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    // Setting the content of each element
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`; // Convert temp from Kelvin to Celsius
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    // Adding CSS classes to the elements
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // Appending elements to the card container
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
