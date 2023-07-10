const express = require("express");
const router = express.Router();
const resultsController = require("../../controllers/resultsController.js");

router.post("/", resultsController.createNewResult);

module.exports = router;
