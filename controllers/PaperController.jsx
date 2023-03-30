const PaperDB = require("../models/Paper.jsx");

const addPaper = (req, res) => {
  let paper = new PaperDB();
  paper.course = req.body.paperCourse;
  paper.subject = req.body.paperSubject;
  paper.year = req.body.paperYear;
  paper.link = req.body.paperLink;
  paper.uniqueId = paper.course + "-" + paper.subject + "-" + paper.year;
  paper
    .save()
    .then(() => res.json({ message: "Success" }))
    .catch((err) => {
      res.json({ message: "Failed", reason: "" + err });
    });
};

const getPaper = (req, res) => {
  console.log(req.body.course);
  console.log(req.body.subject);
  console.log(req.body.year);
  PaperDB.find({
    course: req.body.course,
    subject: req.body.subject,
    year: req.body.year,
  })
    .then((paper) => {
      res.json({ message: "Success", data: paper }); // returns Array.
      console.log(paper);
    })
    .catch((err) => {
      res.json({ message: "Failed", reason: "" + err });
    });
};

module.exports = {
  addPaper,
  getPaper,
};
