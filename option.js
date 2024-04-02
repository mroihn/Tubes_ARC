document.addEventListener("DOMContentLoaded", function () {
  const checkOptionsBtn = document.getElementById("checkOptionsBtn");
  checkOptionsBtn.addEventListener("click", checkOptions);
});

async function checkOptions() {
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather"; // URL endpoint API cuaca
  try {
    const response = await fetch(apiUrl, {
      method: "OPTIONS",
    });
    if (!response.ok) {
      throw new Error("Gagal mendapatkan options.");
    }
    const allowedMethods = response.headers.get("Allow");
    console.log("Metode yang diizinkan:", allowedMethods);
    alert(`Metode yang diizinkan: ${allowedMethods}`);
  } catch (error) {
    console.error("Gagal mendapatkan options:", error);
    alert("Gagal mendapatkan options. Silakan coba lagi.");
  }
}
