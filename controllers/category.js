const Category = require("../models/category");
const Subject = require("../models/Subject");
const { hasAccessTo, allowIfLoggedin } = require('./utils/rbac')

const getSubjectById = async (req, res, next) => {
  try {
    const { id } = req.params
    const subject = await Subject.findById(id);
    if (subject === null) {
      res.status(404).json({ message: "Subject not found" })
    }
    res.subject = subject
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  next()
}


/**
 * Create a subject, done by admins only
 * @param {*} req 
 * @param {*} res 
 */
const create = async (req, res) => {
  try {
    const { category, subject } = req.params
    const newSubject = await Subject.create({
      category,
      subject
    })
    res.json({
      newSubject,
      message: `Subject created under category ${category}`
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * update a given subject under a category
 * @param {*} req 
 * @param {*} res 
 */
const updateSubject = async (req, res) => {
  try {
    const { category, id } = req.params
    const subject = await getSubjectById(req, res)

  } catch (error) {

  }
}

/**
 * Deletes a subject from a category
 * @param {*} req 
 * @param {*} res 
 */
const deleteSubject = async (req, res) => {
  try {

  } catch (error) {

  }
}

/**
 * Updates a given category
 * @param {*} req 
 * @param {*} res 
 */
const updateCategory = async (req, res) => {
  try {

  } catch (error) {

  }
}

/**
 * Deletes a given category
 * @param {*} req 
 * @param {*} res 
 */
const deleteCategory = async (req, res) => {
  try {

  } catch (error) {

  }
}




module.exports = {
  create
};