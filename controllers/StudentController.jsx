const StudentDB = require("../models/Student.jsx");

const addStudent = (req, res) => {
  let student = new StudentDB();
  
  student.name = req.body.studentName;
  student.rollNumber = req.body.studentRollNum;
  student.course = req.body.studentCourse;
  student.email = req.body.studentEmail;
  student.phone = req.body.studentPhone;
  student.batchStart = req.body.batchStartYear;
  student.batchEnd = req.body.batchEndYear;

  student
    .save()
    .then((doc) => console.log(doc))
    .then(() => res.json({ message: "Success" }))
    .catch((err) => res.json({ message: "Failed", reason: "" + err }));
};

const getAllStudents = (req, res) => {
  StudentDB.find({}).then((docs) => res.json(docs));
};

module.exports = {
  addStudent,
  getAllStudents,
};
