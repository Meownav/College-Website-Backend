require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const facultyController = require("./controllers/FacultyController.jsx");
const studentController = require("./controllers/StudentController.jsx");
const alumniController = require("./controllers/AlumniController.jsx");
const paperController = require("./controllers/PaperController.jsx");
const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

mongoose
  .connect(process.env.MONGO_URL) // set MONGO_URL IN .env file.
  .then(console.log("Database connected."))
  .catch((err) => console.log(err));

// Faculty controllers
server.post("/add-faculty", facultyController.addFaculty);
server.get("/get-all-faculty", facultyController.getAllFaculty);

// Student controllers
server.post("/add-student", studentController.addStudent);
server.get("/get-all-students", studentController.getAllStudents);

// Alumni controllers
server.post("/add-alumni", alumniController.addAlumni);
server.get("/get-all-alumni", alumniController.getAllAlumni);

//Question-paper controllers
server.post("/add-paper", paperController.addPaper);
server.post("/get-paper", paperController.getPaper);

//Just because.
server.get("/dummy", (req, res) => res.send("Hello"));

server.listen(PORT, () => {
  console.log("Port is : ", PORT);
  console.log("Server Started.");
});
