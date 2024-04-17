document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", fetchWeather);
});

async function fetchWeather() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Silakan masukkan nama kota.");
    return;
  }

  const apiKey = "2000d1c865d4534418cf416da879ff5d"; // ganti dengan API key
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
    document.getElementById("weatherResult").innerText =
      "Data cuaca tidak tersedia. Silakan coba lagi.";
  }
}

function displayWeather(data) {
  let weatherDescription = data.weather[0].description;
  let weatherImageSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  const weatherHTML = `
        <h2>Cuaca di ${data.name}</h2>
        <img src="${weatherImageSrc}" alt="${weatherDescription}" style="width: 100px; height: auto;">
        <p>Suhu: ${data.main.temp}°C</p>
        <p>Deskripsi: ${weatherDescription}</p>
        <p>Kelembapan: ${data.main.humidity}%</p>
        <p>Kecepatan Angin: ${data.wind.speed} m/s</p>
    `;
  document.getElementById("weatherResult").innerHTML = weatherHTML;
}
