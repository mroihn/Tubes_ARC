const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

app.get("/http-request-get", async function (req, res) {
  try {
    const url = req.query.url;
    const response = await axios.get(url);
    const responseData = {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
    res.json(responseData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.post("/http-request-post", async function (req, res) {
  try {
    const url = req.query.url;
    const body = req.body;
    console.log(body);
    const response = await axios.post(url, body);
    const responseData = {
      data: response.data,
      headers: response.headers,
      status: response.status,
    };
    res.json(responseData);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
