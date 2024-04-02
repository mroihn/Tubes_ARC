document.addEventListener("DOMContentLoaded", function () {
  const checkUpdateBtn = document.getElementById("checkUpdateBtn");
  checkUpdateBtn.addEventListener("click", checkLastUpdate);
});

async function checkLastUpdate() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Silakan masukkan nama kota.");
    return;
  }

  const apiKey = "-";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl, { method: "HEAD" });
    if (!response.ok) {
      throw new Error("Gagal mendapatkan update.");
    }

    // misalnya menampilkan tanggal dan waktu terakhir diupdate dari header 'Last-Modified'
    const lastUpdated = response.headers.get("Last-Modified");
    console.log("Terakhir diupdate pada:", lastUpdated);
    alert(`Informasi cuaca terakhir diupdate pada: ${lastUpdated}`);
  } catch (error) {
    console.error("Gagal mendapatkan informasi update:", error);
    alert("Gagal mendapatkan informasi update. Silakan coba lagi.");
  }
}
