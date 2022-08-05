const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

require("colors");

const dbConfig = require("./utils/dgConfig");
const routes = require("./src/Routes/index");

const app = express();
app.use(express.json());

dbConfig();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
  
app.use("/api/v1/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      "server has started on:  " +
        `${process.env.NODE_ENV}`.yellow.bold +
        " mode"
    );
  } else {
    console.log(
      "server has started on:  " +
        `${process.env.NODE_ENV}`.green.bold +
        " mode"
    );
  }
  console.log(`url: ` + `http://localhost:${port}`.yellow);
});
