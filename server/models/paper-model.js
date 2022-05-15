const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  board: String,
  subject: String,
  class: String,
  type: {
    type: String,
    required: [true, "Please Provide Type"],
    enum: ["Past Paper", "Guess Paper", "Test Series"],
  },
  university: String,
  paperDoc: {
    type: String,
    required: [true, "Please Provide Paper Documents"],
  },
});

module.exports = mongoose.model("Paper", paperSchema);
