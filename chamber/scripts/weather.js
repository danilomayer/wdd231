const apiKey = '3ecb70f187942fefdf518b2d16424c59';
const city = 'New Orleans';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const currentWeather = data.list[0];
        document.getElementById('weather-temp').textContent = `${Math.round(currentWeather.main.temp)}°F`;
        document.getElementById('weather-desc').textContent = `${currentWeather.weather[0].description}`;
        document.getElementById('weather-high').textContent = `High: ${currentWeather.main.temp_max}°F`;
        document.getElementById('weather-low').textContent = `Low: ${currentWeather.main.temp_min}°F`;
        document.getElementById('weather-humidity').textContent = `Humidity: ${currentWeather.main.humidity}%`;
        document.getElementById('weather-sunrise').textContent = `Sunrise: ${new Date(data.city.sunrise * 1000).toLocaleTimeString()}`;
        document.getElementById('weather-sunset').textContent = `Sunset: ${new Date(data.city.sunset * 1000).toLocaleTimeString()}`;

        // Add weather icon
        const weatherIconCode = currentWeather.weather[0].icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
        const weatherIconElement = document.getElementById('weather-icon');
        weatherIconElement.src = weatherIconUrl; // Dynamically set the src attribute
        weatherIconElement.alt = currentWeather.weather[0].description; // Set the alt attribute

        document.getElementById('forecast-day1').textContent = `Today: ${data.list[8].main.temp}°F`;
        document.getElementById('forecast-day2').textContent = `Tomorrow: ${data.list[16].main.temp}°F`;
        document.getElementById('forecast-day3').textContent = `Day After: ${data.list[24].main.temp}°F`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
