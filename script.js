const weatherSection = document.getElementById("weather-content");
const forecastSection = document.getElementById("forecast");
const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const city = cityInput.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                weatherSection.innerHTML = `<p>City not found. Please try again.</p>
            `;
                return;
            }

            const temperature = (data.main.temp - 273.15).toFixed(1);
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            const sunrise = new Date(data.sys.sunrise * 1000);
            const sunset = new Date(data.sys.sunset * 1000);
            const sunriseTime = sunrise.toLocaleTimeString();
            const sunsetTime = sunset.toLocaleTimeString();


            weatherSection.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${iconUrl}" alt="${description}">
          <p>${temperature}°C</p>
          <p class="weather-description">${description}</p> 
        
        <div class="sun-times">
          <p>Sunrise: ${sunriseTime}</p>
          <p>Sunset: ${sunsetTime}</p> 
        </div>`;
        });

    const forecastUrl =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            forecastSection.innerHTML = "";

            for (let day = 1; day <= 4; day++) {

                const daysAhead = day;

                const tomorrowDate = new Date();

                tomorrowDate.setDate(
                    tomorrowDate.getDate() + daysAhead
                );

                const tomorrowString =
                    tomorrowDate.toISOString().split("T")[0];

                const dayForecast = data.list.filter(item => {
                    return item.dt_txt.startsWith(tomorrowString);
                });

                const selectedForecast = dayForecast.find(item => {
                    return item.dt_txt.includes("12:00:00");
                });

                const temperatures = dayForecast.map(item => {
                    return item.main.temp - 273.15;
                });

                const highTemperature = Math.max(...temperatures).toFixed(1);
                const lowTemperature = Math.min(...temperatures).toFixed(1);

                const forecastDate = new Date(selectedForecast.dt * 1000);

                const dayName = forecastDate.toLocaleDateString("en-US", {
                    weekday: "short"
                });

                const description =
                    selectedForecast.weather[0].description;

                const icon =
                    selectedForecast.weather[0].icon;

                const iconUrl =
                    `https://openweathermap.org/img/wn/${icon}@2x.png`;

                forecastSection.innerHTML += `
                    <div>
                        <h3>${dayName}</h3>

                        <img
                            src="${iconUrl}"
                            alt="${description}">
                        
                <div class="forecast-info">
                    <p>
                        <span class="high-temperature">${highTemperature}°</span> 
                        <span class="low-temperature">${lowTemperature}°</span>
                    </p>
                </div>
                `;
            }
        });
});