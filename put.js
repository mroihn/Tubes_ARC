document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const saveFavBtn = document.getElementById("saveFavBtn");
  searchBtn.addEventListener("click", fetchWeather);
  saveFavBtn.addEventListener("click", updateFavoriteCity);
});

async function updateFavoriteCity() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Silakan masukkan nama kota terlebih dahulu.");
    return;
  }

  const apiUpdateUrl = "https:"; 
  const userToken = "-"; 

  try {
    const response = await fetch(apiUpdateUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`, 
      },
      body: JSON.stringify({ cityName: cityName }), 
    });
    if (!response.ok) {
      throw new Error("Gagal memperbarui kota favorit");
    }
    alert("Kota favorit berhasil diperbarui.");
  } catch (error) {
    console.error("Gagal memperbarui kota favorit:", error);
    alert("Gagal memperbarui kota favorit. Silakan coba lagi.");
  }
}
