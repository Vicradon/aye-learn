const Lesson = require('../models/lesson')
const Subject = require('../models/subject')
const Category = require('../models/category')
/**
 * Create a new subject and link to a category
 * @param {*} req 
 * @param {*} res 
 */
const createSubject = async (req, res) => {
  try {
    const { name, category } = req.body
    let exists
    await Subject.findOne({ name, category }, (err, data) => {
      if (err) throw new Error(err)
      exists = data
    })
    await Category.findOne({ name: category }, (err, data) => {
      if (err) throw new Error(err)
      if (!data) {
        Category.create({ name: category }, (err) => { if (err) throw new Error(err) })
      }
    })

    if (exists) {
      throw new Error("This subject name is already available")
    }
    const subject = new Subject({ name, category })

    await subject.save((err, data) => {
      if (err) throw new Error(err)
      const id = data._id
      Category.findOne({ name: category }, (err, data) => {
        if (err) throw new Error(err)
        data.subjects.push(id)
        data.save((err) => { if (err) throw new Error(err) })
      })
      res.status(201).json({
        subject,
        message: "Successfully created the subject"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * update the details of a subject
 * @param {*} req 
 * @param {*} res 
 */
const updateSubject = async (req, res) => {
  try {
    const { id } = req.params
    // const { newName } = req.body

    await Subject.findByIdAndUpdate(id, { ...req.body }, (err, subject) => {
      if (err) throw new Error(err)
      res.json({
        id: subject._id,
        message: "Subject updated successfully"
      })
    })
  } catch (error) {
    res.json({
      subject,
      message: error.message
    })
  }
}


/**
 * delete a subject
 * @param {*} req 
 * @param {*} res 
 */
const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params

    await Subject.findByIdAndDelete(id, (err, subject) => {
      if (err) throw new Error(err)
      const lessonIds = subject.lessons;
      Subject.deleteMany({ _id: lessonIds }, (err) => { if (err) throw new Error(err) })
      res.json({
        message: "successfully deleted category and linked subjects"
      })

      let category;
      if (subject) {
        category = subject.category
      }
      Category.findOne({ name: category }, (err, data) => {
        if (err) throw new Error(err)
        const index = data.subjects.indexOf(id)
        data.subjects.splice(index, 1)
        data.save((err) => { if (err) throw new Error(err) })
      })

      res.json({
        message: "successfully deleted subject"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


/**
 * get all available subjects
 * @param {*} req 
 * @param {*} res 
 */
const getAllSubjects = async (req, res) => {
  try {
    await Subject.find({}, (err, subjects) => {
      if (err) throw new Error(err);
      res.json({
        subjects,
        message: "All subjects"
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
const getSubject = async (req, res) => {
  try {
    const { id } = req.params
    await Subject.findById(id, (err, subject) => {
      if (err) throw new Error(err);
      res.json({
        subject,
        message: "subject"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


module.exports = {
  getSubject,
  getAllSubjects,
  createSubject,
  updateSubject,
  deleteSubject
}