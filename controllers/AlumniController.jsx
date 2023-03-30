const AlumniDB = require("../models/Alumni.jsx");

const addAlumni = (req, res) => {
  let alumni = new AlumniDB();
  alumni.uniqueId = req.body.alumniId;
  alumni.name = req.body.alumniName;
  alumni.batch = req.body.alumniBatch;
  alumni.qualifications = req.body.alumniCurrentWork;
  alumni.currentWork = req.body.alumniCurrentWork;

  alumni
    .save()
    .then(() => res.json({ message: "Success" }))
    .catch((err) => {
      res.json({ message: "Failed", reason: "" + err });
    });
};

const getAllAlumni = (req, res) => {
  AlumniDB.find({}).then((docs) => res.json(docs));
};

module.exports = {
  addAlumni,
  getAllAlumni,
};
