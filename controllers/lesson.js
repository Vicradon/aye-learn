const Lesson = require('../models/lesson')
/**
 * Create a new lesson
 * @param {*} req 
 * @param {*} res 
 */
const createLesson = async (req, res) => {
  try {
    const { name } = req.body
    let exist
    await Lesson.findOne({ name }, (err, data) => {
      if (err) throw new Error(err)
      exists = data
    })

    if (exists) {
      throw new Error("This lesson name is already available, chose another and try again")
    }
    const lesson = new Lesson({ name: name })
    await lesson.save((err, lessonData) => {
      if (err) throw new Error(err)
      res.status(201).json({
        lessonData,
        message: "Successfully created the lesson"
      })
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

    await Lesson.findByIdAndDelete(id, (err) => {
      if (err) throw new Error(err)
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
  createLesson
}