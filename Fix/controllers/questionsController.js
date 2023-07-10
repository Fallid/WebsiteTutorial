const path = require("path");
const fs = require("fs");

const showQuestions = (req, res) => {
  const questionsJSON = fs.readFileSync(
    path.join(__dirname, "..", "data", "questions.json")
  );
  const questions = JSON.parse(questionsJSON); //gaakan muncul kalo gaada widdleware
  res.render(path.join(__dirname, "..", "views", "QuestionsPage.ejs"), {
    questions: questions,
  });
};

const showCaution = (req, res) => {
  res.render(path.join(__dirname, "..", "views", "ExamCaution.ejs"));
};

module.exports = {
  showQuestions,
  showCaution,
};
