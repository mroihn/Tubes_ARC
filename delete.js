document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const deleteFavBtn = document.getElementById("deleteFavBtn");
  searchBtn.addEventListener("click", fetchWeather);
  deleteFavBtn.addEventListener("click", deleteFavoriteCity);
});

async function deleteFavoriteCity() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Silakan masukkan nama kota yang ingin dihapus dari favorit.");
    return;
  }

  const apiDeleteUrl = "-"; 
  const userToken = "-";

  try {
    const response = await fetch(
      `${apiDeleteUrl}/${encodeURIComponent(cityName)}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Gagal menghapus kota favorit");
    }
    alert("Kota favorit berhasil dihapus.");
  } catch (error) {
    console.error("Gagal menghapus kota favorit:", error);
    alert("Gagal menghapus kota favorit. Silakan coba lagi.");
  }
}
