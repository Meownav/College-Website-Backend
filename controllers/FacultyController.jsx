const FacultyDB = require("../models/Faculty.jsx");

const addFaculty = (req, res) => {
  let faculty = new FacultyDB();

  faculty.uniqueId = req.body.facultyId;
  faculty.name = req.body.facultyName;
  faculty.designation = req.body.facultyDesignation;
  faculty.subject = req.body.facultySubject;
  faculty.email = req.body.facultyEmail;
  faculty.phone = req.body.facultyPhone;
  faculty.joinDate = req.body.facultyJoinDate;

  faculty
    .save()
    .then((doc) => console.log(doc))
    .then(() => {
      res.json({ message: "Success" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Failed", reason: "" + err });
    });
};

const getAllFaculty = (req, res) => {
  FacultyDB.find({}).then((docs) => res.json(docs));
};

module.exports = {
  addFaculty,
  getAllFaculty,
};
