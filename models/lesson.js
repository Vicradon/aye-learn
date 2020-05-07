const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
