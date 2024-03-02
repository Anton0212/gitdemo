
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.description');
const iconElement = document.querySelector('.weather-icon');


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}


function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locationElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    getWeather(latitude, longitude);
}


// Function to retrieve weather information based on position
function getWeather(latitude, longitude) {
    const apiKey = 'c22ce1dd5827b0d7f90b51155ff0f5df';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon=${lon}&appid=${apiKey}`;

    axios.get(apiUrl)
        .then(response => {
            const weatherData = response.data;
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = `Description: ${description}`;
            // Update icon URL to use HTTPS
            iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}



getLocation();
