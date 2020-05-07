const Subject = require('../models/subject')
/**
 * Create a new subject and link to a category
 * @param {*} req 
 * @param {*} res 
 */
const createSubject = async (req, res) => {
  try {
    const name = req.params.name
    const alreadyExist = Subject.findOne({ name })
    if (alreadyExist) {
      throw new Error("This subject name is already available")
    }
    const subject = new Subject({ name })
    await subject.save()

    res.status(201).json({
      message: "Successfully created the subject"
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
    const { newName } = req.body

    const subject = Subject.findByIdAndUpdate(id, { name: newName }, (err) => {
      if (err) throw new Error(err)
    })
    if (!subject) {
      throw new Error("No such subject exists")
    }
    res.json({
      message: "Subject updated successfully"
    })
  } catch (error) {
    res.json({
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
    
    await Subject.findByIdAndDelete(id, (err) => {
      if (err) throw new Error(err)
    })
    // if (!subject) {
    //   throw new Error("No such subject exists")
    // }
    res.json({
      message: "successfully deleted subject"
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


module.exports = {
  createSubject,
  updateSubject,
  deleteSubject
}