const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: Stirng,
    required: true
  }
})

const Subject = mongoose.model('Subject', SubjectSchema)

module.exports = Subject