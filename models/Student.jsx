const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  batchStart: {
    type: Number,
    required: true,
  },
  batchEnd: {
    type: Number,
    required: true,
  },
});

const StudentDB = mongoose.model("Student", studentSchema);

module.exports = StudentDB;
