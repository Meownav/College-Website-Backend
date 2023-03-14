const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  join_date: {
    type: Date,
    required: true,
  },
});

const FacultyDB = mongoose.model("Faculty", facultySchema);

module.exports = FacultyDB;
