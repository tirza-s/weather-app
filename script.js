let weather = {
    paris: {
        temp: 19.7,
        humidity: 80
    },
    tokyo: {
        temp: 17.3,
        humidity: 50
    },
    lisbon: {
        temp: 30.2,
        humidity: 20
    },
    "san francisco": {
        temp: 20.9,
        humidity: 100
    },
    oslo: {
        temp: -5,
        humidity: 20
    },
    brussels: {
        temp: 6,
        humidity: 88
    }
};

function showWeather() {
    let city = document.getElementById("cityName").value.trim().toLowerCase();

    if (weather[city]) {
        // check the weather data
        let currentWeather = weather[city].temp;
        let humidity = weather[city].humidity;

        // Convert temperature to Celsius and Fahrenheit
        let celciusTemperature = Math.round(currentWeather);
        let fahrenheitTemperature = Math.round(currentWeather * 9) / 5 + 32;

        //display the weather info
        alert(`In ${city.charAt(0).toUpperCase() + city.slice(1)}, the temperature is currently ${celciusTemperature}°C | ${fahrenheitTemperature}°F and the humidity is ${humidity}%`);
    } else {
        alert("City is not found!")
    }
}

// Add event listener to the button
document.getElementById("search").onclick = showWeather;