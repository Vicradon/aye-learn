const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Primary', 'JSS', 'SSS']
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson'
    }
  ]
})

const Subject = mongoose.model('Subject', SubjectSchema)

module.exports = Subject