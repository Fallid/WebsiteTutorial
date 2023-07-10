const express = require("express");
const router = express.Router();
const path = require("path");

router
  .get("/", (req, res) => {
    res.render(path.join(__dirname, "..", "views", "Dashboard.ejs"));
  })
  .get("/PemrogramanDasar", (req, res) => {
    res.render(path.join(__dirname, "..", "views", "PemrogramanDasar.ejs"));
  })
  .get("/PemrogramanLanjut", (req, res) => {
    res.render(path.join(__dirname, "..", "views", "PemrogramanLanjut.ejs"));
  })
  .get("/FinalExam", (req, res) => {
    res.render(path.join(__dirname, "..", "views", "ExamCaution.ejs"));
  });

module.exports = router;
