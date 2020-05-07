const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
});

const Tutor = mongoose.model("Tutor", TutorSchema);

module.exports = Tutor;
