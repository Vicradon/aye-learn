const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  takenBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

});

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
