const mongoose = require("mongoose");

const alumniDB = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  currentWork: {
    type: String,
    required: true,
  },
});

const AlumniDB = new mongoose.model("Alumni", alumniDB);

module.exports = AlumniDB;
