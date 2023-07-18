const express = require("express");
const router = express.Router();
const questionsController = require("../../controllers/questionsController");

router.get("/", questionsController.showQuestions);
router.get("/caution", questionsController.showCaution);

module.exports = router;
