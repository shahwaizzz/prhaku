const mongoose = require("mongoose");

const studySchemeSchema = new mongoose.Schema({
  class: {
    type: String,
    required: [true, "Please Provide Class"],
  },
  category: {
    type: String,
    required: [true, "Please Provide Category"],
  },
  subject: {
    type: String,
    required: [true, "Please Provide Subject"],
  },
  studySchemeDoc: {
    type: String,
    required: [true, "Please Provide Study Scheme Document"],
  },
});

module.exports = mongoose.model("StudyScheme", studySchemeSchema);
