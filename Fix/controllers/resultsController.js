const resultsDB = {
  results: require("../data/results.json"),
  setResults: function (data) {
    this.results = data;
  },
};

const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const RESULT_PATH = path.join(__dirname, "..", "data", "results.json");

const createNewResult = async (req, res) => {
  const newResult = req.body;
  if (!newResult.title || !newResult.user)
    return res
      .status(400)
      .json({ message: "Title and user values are required!" });

  // write to results.json
  resultsDB.setResults([...resultsDB.results, newResult]);
  await fsPromises.writeFile(RESULT_PATH, JSON.stringify(resultsDB.results));
  res.redirect("/");
};

module.exports = {
  createNewResult,
};
