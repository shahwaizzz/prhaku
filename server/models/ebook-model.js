const mongoose = require("mongoose");

const ebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Provide Title"],
    minlength: 5,
    maxlength: 45,
  },
  category: {
    type: String,
    required: [true, "Please Provide Category"],
  },
  ebookImage: {
    type: String,
    required: [true, "Please Provide Image"],
  },
  ebookDoc: {
    type: String,
    required: [true, "Please Provide Ebook"],
  },
});

module.exports = mongoose.model("Ebooks", ebookSchema);
