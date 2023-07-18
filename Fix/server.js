// imports
const express = require("express");
require("ejs");

const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

// variables
const app = express();
const PORT = process.env.PORT || 3500;

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "eje");

// routes
app.use("/", require(path.join(__dirname, "routes", "root.js")));
app.use(
  "/questions",
  require(path.join(__dirname, "routes", "api", "questions.js"))
);
app.use(
  "/results",
  require(path.join(__dirname, "routes", "api", "results.js"))
);

// port listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
