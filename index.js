require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const FacultyDB = require("./models/Faculty.jsx");
const StudentDB = require("./models/Student.jsx");
const AlumniDB = require("./models/Alumni.jsx");

const PORT = process.env.PORT || 5000;

const server = express();
server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

mongoose
  .connect(process.env.MONGO_URL) // set MONGO_URL IN .env file.
  .then(console.log("Database connected."))
  .catch((err) => console.log(err));

// a page to add faculty will send the request here.
server.post("/add-faculty", (req, res) => {
  let faculty = new FacultyDB();
  faculty.name = req.body.facultyName;
  faculty.subject = req.body.facultySubject;
  faculty.designation = req.body.facultyDesignation;
  faculty.email = req.body.facultyEmail;
  faculty.phone = req.body.facultyPhone;
  faculty.join_date = req.body.facultyJoinDate;

  faculty
    .save()
    .then((doc) => console.log(doc))
    .then(() => {
      res.json({ message: "Success" });
    })
    .catch((err) => {
      res.json({ message: "Failed", reason: "" + err });
    });
});

server.get("/get-all-faculty", (req, res) => {
  FacultyDB.find({}).then((docs) => res.json(docs));
});

server.post("/add-student", (req, res) => {
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
});

server.get("/get-all-students", (req, res) => {
  StudentDB.find({}).then((docs) => res.json(docs));
});

server.post("/add-alumni", (req, res) => {
  let alumni = new AlumniDB();
  alumni.name = req.body.alumniName;
  alumni.batch = req.body.alumniBatch;
  alumni.qualifications = req.body.alumniCurrentWork;
  alumni.currentWork = req.body.alumniCurrentWork;

  alumni
    .save()
    .then((doc) => console.log(doc))
    .then(() => res.json({ message: "Success" }))
    .catch((err) => res.json({ message: "Failed", reason: "" + err }));
});

server.get("/get-all-alumni", (req, res) => {
  AlumniDB.find({}).then((docs) => res.json(docs));
});

server.get("/dummy", (req, res) => res.send("Hello"));

server.listen(PORT, () => {
  console.log("Port is : ", PORT);
  console.log("Server Started.");
  
});
