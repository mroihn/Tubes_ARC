document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const updatePrefBtn = document.getElementById("updatePrefBtn");
  searchBtn.addEventListener("click", fetchWeather);
  updatePrefBtn.addEventListener("click", updatePreferences);
});

async function updatePreferences() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Silakan masukkan nama kota terlebih dahulu.");
    return;
  }

  const apiUpdateUrl = "https:"; 
  const userToken = "-"; 

  try {
    const response = await fetch(apiUpdateUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`, 
      },
      body: JSON.stringify({ cityName: cityName }), 
    });
    if (!response.ok) {
      throw new Error("Gagal memperbarui preferensi");
    }
    alert("Preferensi berhasil diperbarui.");
  } catch (error) {
    console.error("Gagal memperbarui preferensi:", error);
    alert("Gagal memperbarui preferensi. Silakan coba lagi.");
  }
}
