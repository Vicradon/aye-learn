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
    await lesson.save((err) => {
      if (err) throw new Error(err)
    })

    res.status(201).json({
      message: "Successfully created the lesson"
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
    const { newName } = req.body

    const lesson = Lesson.findByIdAndUpdate(id, { name: newName }, (err) => {
      if (err) throw new Error(err)
    })
    if (!lesson) {
      throw new Error("No such lesson exists")
    }
    res.json({
      message: "Lesson updated successfully"
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
    const lessons = Lesson.find({}).toArray((err, lessons) => {
      if (err) throw new Error(err);
    });
    res.json({
      lessons,
      message: "All lessons"
    })
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
    const lesson = Lesson.findById(id, (err, items) => {
      if (err) throw new Error(err);
    });
    res.json({
      lesson,
      message: "Lesson"
    })
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
    })

    res.json({
      message: "successfully deleted the lesson"
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