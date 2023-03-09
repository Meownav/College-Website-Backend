require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Database connected."))
  .catch((err) => console.log(err));

const professorSchema = new mongoose.Schema({
  name: String,
  designation: String,
  subject: String,
  email: String,
  phone: Number,
  join_date: Date,
});

const Prof = mongoose.model("Professor", professorSchema);

// a page to add professor will send the request here.
server.post("/test1", (req, res) => {
  let prof = new Prof();
  prof.name = req.body.facultyName;
  prof.subject = req.body.facultySubject;
  prof.designation = req.body.facultyDesignation;
  prof.email = req.body.facultyEmail;
  prof.phone = req.body.facultyPhone;
  prof.join_date = req.body.facultyJoinDate;
  prof
    .save()
    .then((doc) => console.log(doc))
    .then(() => {
      res.json({ message: "Successfully inserted to DB." });
    });
});

server.get("/test1", (req, res) => {
  Prof.find({}).then((docs) => res.json(docs));
});

server.listen(5000, () => {
  console.log("Server Started.");
});
