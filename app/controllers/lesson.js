const Lesson = require('../models/lesson')
const Subject = require('../models/subject')

/**
 * Create a new lesson
 * @param {*} req 
 * @param {*} res 
 */
const bookLesson = async (req, res) => {
  try {
    const { name, subject, takenBy, startTime, endTime } = req.body

    await Lesson.findOne({ name, subject, takenBy, startTime, endTime }, (err, data) => {
      try {


        let exists
        let subjectExist

        if (err) throw new Error(err)
        exists = data
        Subject.findOne({ name: subject }, (err, subject) => {
          if (err) throw new Error(err)
          if (subject === null) {
            subjectExist = false
          }
          console.log(3);

          if (subject) {
            subjectExist = true
          }
        })

        if (!startTime) {
          throw new Error("Start time not provided")
        }

        if (!endTime) {
          throw new Error("End time not provided")
        }
        console.log(subjectExist)

        if (!subjectExist) {
          console.log(!subjectExist)
          throw new Error("subject not available, please make sure you are posting a lesson to an available subject")
        }

        if (exists) {
          throw new Error("This lesson name is already available, chose another and try again")
        }

      } catch (error) {
        res.json({
          message: error.message
        })
      }

      const saveLesson = async () => {

        const lesson = new Lesson({ name, subject, takenBy, startTime, endTime })
        await lesson.save((err, lessonData) => {
          if (err) throw new Error(err)
          const id = lessonData._id
          Subject.findOne({ name: subject }, (err, subject) => {
            if (err) throw new Error(err)
            subject.lessons.push(id)
            subject.save((err) => { if (err) throw new Error(err) })
          })

          res.status(201).json({
            lessonData,
            message: "Successfully booked the lesson"
          })
        })
      }
      saveLesson()

    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * update a lesson by id
 * @param {*} req 
 * @param {*} res 
 */
const updateLesson = async (req, res) => {
  try {
    const { id } = req.params
    const newDetails = req.body

    await Lesson.findByIdAndUpdate(id, { ...newDetails }, (err) => {
      res.json({
        message: "Lesson updated successfully"
      })
      if (err) throw new Error(err)
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


/**
 * get all available lessons
 * @param {*} req 
 * @param {*} res 
 */
const getAllLessons = async (req, res) => {
  try {
    await Lesson.find({}, (err, lessons) => {
      if (err) throw new Error(err);
      res.json({
        lessons,
        message: "All lessons"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * get a lesson by id
 * @param {*} req 
 * @param {*} res 
 */
const getLesson = async (req, res) => {
  try {
    const { id } = req.params
    await Lesson.findById(id, (err, lesson) => {
      if (err) throw new Error(err);
      res.json({
        lesson,
        message: "Lesson"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}



/**
 * Delete a lesson by id
 * @param {*} req 
 * @param {*} res 
 */
const deleteLesson = async (req, res) => {
  try {
    const { id } = req.params
    const { subject } = req.body

    await Lesson.findByIdAndDelete(id, (err) => {
      if (err) throw new Error(err)

      Subject.findOne({ name: subject }, (err, subject) => {
        if (err) throw new Error(err)
        const index = subject.lessons.indexOf(id)
        subject.lessons.splice(index, 1)
        subject.save((err) => { if (err) throw new Error(err) })
      })

      res.json({
        message: "successfully deleted the lesson"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

module.exports = {
  updateLesson,
  getAllLessons,
  getLesson,
  deleteLesson,
  bookLesson
}