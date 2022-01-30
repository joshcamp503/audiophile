const express = require("express");
const app = express();

app.get("/products", async (request, response) => {
  const products = await response

  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app