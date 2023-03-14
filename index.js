require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const facultyController = require("./controllers/FacultyController.jsx");
const studentController = require("./controllers/StudentController.jsx");
const alumniController = require("./controllers/AlumniController.jsx");

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
server.post("/add-faculty", (req, res) =>
  facultyController.addFaculty(req, res)
);

server.get("/get-all-faculty", (req, res) =>
  facultyController.getAllFaculty(req, res)
);

// Student controllers
server.post("/add-student", (req, res) =>
  studentController.addStudent(req, res)
);

server.get("/get-all-students", (req, res) =>
  studentController.getAllStudents(req, res)
);

// Alumni controllers
server.post("/add-alumni", (req, res) => alumniController.addAlumni(req, res));
server.get("/get-all-alumni", (req, res) =>
  alumniController.getAllAlumni(req, res)
);

server.get("/dummy", (req, res) => res.send("Hello"));

server.listen(PORT, () => {
  console.log("Port is : ", PORT);
  console.log("Server Started.");
});
