document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const saveFavBtn = document.getElementById("saveFavBtn");
  searchBtn.addEventListener("click", fetchWeather);
  saveFavBtn.addEventListener("click", saveFavoriteCity);
});

async function saveFavoriteCity() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Silakan masukkan nama kota terlebih dahulu.");
    return;
  }

  const apiSaveUrl = "https://"; // ganti URL API
  const userToken = "USER_TOKEN"; // ganti dengan tokennya

  try {
    const response = await fetch(apiSaveUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({ cityName: cityName }), //
    });
    if (!response.ok) {
      throw new Error("Gagal menyimpan kota favorit");
    }
    alert("Kota favorit berhasil disimpan.");
  } catch (error) {
    console.error("Gagal menyimpan kota favorit:", error);
    alert("Gagal menyimpan kota favorit. Silakan coba lagi.");
  }
}
