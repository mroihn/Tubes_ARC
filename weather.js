document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', fetchWeather);
});

async function fetchWeather() {
    const cityName = document.getElementById('cityName').value;
    const apiKey = 'API'; // API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Kota tidak ditemukan");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
        document.getElementById('hasilCuaca').innerText = 'Data cuaca kota tersebut tidak tersedia. Silahkan coba lagi.';
    }
}

function displayWeather(data) {
    let weatherImageSrc;
    switch (data.weather[0].main.toLowerCase()) {
      case "clear":
        weatherImageSrc = 'clear.png';
        break;
      case "clouds":
        weatherImageSrc = 'clouds.png';
        break;
      case "rain":
        weatherImageSrc = 'rain.png';
        break;
      case "thunderstorm":
        weatherImageSrc = 'thunderstorm.png';
        break;
      default:
        weatherImageSrc = 'default.png'; //"mist", "snow", atau "fog"
    }

    const weather = `
        <h2>Weather in ${data.name}</h2>
        <img src="${weatherImageSrc}" alt="Weather icon" style="width: 100px; height: auto;">
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherResult').innerHTML = weather;
}
