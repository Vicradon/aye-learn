const Subject = require('../models/subject')
/**
 * Create a new subject and link to a category
 * @param {*} req 
 * @param {*} res 
 */
const createSubject = async (req, res) => {
  try {
    const name = req.params.name
    const subject = Subject.create({name})
    await subject.save()
    console.log(44)
    res.status(201).json({
      message: "Successfully created the subject"
    })
  } catch (error) {
    
  }
}

/**
 * update the details of a subject
 * @param {*} req 
 * @param {*} res 
 */
const updateSubject = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}


/**
 * delete a subject
 * @param {*} req 
 * @param {*} res 
 */
const deleteSubject = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}


module.exports = {
  createSubject,
  updateSubject,
  deleteSubject
}