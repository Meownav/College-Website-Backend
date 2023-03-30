const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const PaperDB = mongoose.model("Paper", paperSchema);

module.exports = PaperDB;
