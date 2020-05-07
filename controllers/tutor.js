const Tutor = require('../models/tutor')
const roles = require('../roles')


const getAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find({});
    res.json({
      tutors,
      message: "All tutors listed"
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

const getTutor = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
    }, (err, user) => {
      if (err) console.error(err)
    });
    res.json({
      user,
      message: "User found!"
    })
  } catch (e) {
    res.json({
      message: e.message
    })
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const removeTutorRights = async (req, res) => {
  try {
    await User.findByIdAndDelete({
      _id: req.params.id,
    }, (err, user) => {
      if (err) console.error(err)
    });
    res.json({
      message: "Remove tutor rights successfully"
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const registerSubject = async (req, res) => {
  try {

  } catch (error) {

  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getSubjects = async (req, res) => {
  try {

  } catch (error) {

  }
}



module.exports = {
  getAllTutors,
  getTutor,
  removeTutorRights,
  registerSubject,
  getSubjects
}