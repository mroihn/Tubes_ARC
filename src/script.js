async function sendRequest() {
  try {
    let url = document.getElementById("url").value;
    let method = document.getElementById("method").value;
    let body = document.getElementById("body").value;
    let response;
    if (method == "GET") {
      response = await fetch(`http://localhost:3000/http-request-get?url=${url}`);
    }
    const responseData = await response.json();
    document.getElementById("responseContainer").style.display = "block";
    document.getElementById("responseCode").innerText =
      "Response Code: " + response.status;

    const headersContainer = document.getElementById("responseHeaders");
    headersContainer.innerHTML = "";

    for (const [key, value] of Object.entries(responseData.headers)) {
      const headerElement = document.createElement("div");
      headerElement.innerText = `${key}: ${value}`;
      headersContainer.appendChild(headerElement);
    }

    document.getElementById("responseBody").innerText = JSON.stringify(
      responseData.data,
      null,
      2
    );
  } catch (error) {
    alert(error);
    console.error("Error:", error);
    document.getElementById("responseContainer").style.display = "block";
    document.getElementById("responseCode").innerText = "Error";
    document.getElementById("responseBody").innerText =
      "An error occurred. Please check your request.";
  }
}
