async function sendRequest() {
  try {
    let url = document.getElementById("url").value;
    let method = document.getElementById("method").value;
    let body = document.getElementById("body").value;
    let response;
    if (method == "GET") {
      response = await fetch(
        `http://localhost:3000/http-request-get?url=${url}`,
        {
          method: "GET",
        }
      );
    } else if (method == "POST") {
      let jsonbody = JSON.parse(body);
      response = await fetch(
        `http://localhost:3000/http-request-post?url=${url}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonbody),
        }
      );
    } else if (method == "PATCH") {
      let jsonbody = JSON.parse(body);
      response = await fetch(
        `http://localhost:3000/http-request-patch?url=${url}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonbody),
        }
      );
    }
    const responseData = await response.json();
    document.getElementById("responseHeaderContainer").style.display = "block";
    document.getElementById("headerLabel").innerText = "Response Header";
    document.getElementById("responseBodyContainer").style.display = "block";
    document.getElementById("bodyLabel").innerText = "Response Body";
    document.getElementById("responseCode").innerText =
      "Response Code: " + responseData.status;
    document.getElementById("responseMethod").innerText = method;

    const headersContainer = document.getElementById("responseHeaders");
    headersContainer.innerHTML = "";

    for (const [key, value] of Object.entries(responseData.headers)) {
      const headerElement = document.createElement("div");
      headerElement.innerText = `${key}: ${value}`;
      headersContainer.appendChild(headerElement);
    }

    document.getElementById("responseBody").style.display = "block";
    const contentType = responseData.contentType;
    if (contentType && contentType.includes("text/html")) {
      document.getElementById("responseBody").innerHTML = responseData.data;
    } else {
      document.getElementById("responseBody").innerText = JSON.stringify(
        responseData.data,
        null,
        2
      );
    }

    // document.getElementById("responseBody").innerText = JSON.stringify(
    //   responseData.data,
    //   null,
    //   2
    // );
  } catch (error) {
    alert(error);
    console.error("Error:", error);
    document.getElementById("responseBodyContainer").style.display = "none";
    document.getElementById("responseHeaderContainer").style.display = "none";
    document.getElementById("responseCode").innerText =
    "An error occurred. Please check your request.";
    document.getElementById("responseMethod").innerText = "";
    document.getElementById("headerLabel").innerText = "";
    document.getElementById("bodyLabel").innerText = "";    
  }
}
