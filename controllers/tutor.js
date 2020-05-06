const { hasAccessTo, allowIfLoggedin } = require('./utils/rbac')

const getAllTutors = async (req, res) => {
  try {
    const user = await User.find({});
    res.json({
      user,
      message: "All users listed"
    });
  } catch (error) {
    res.json({
      message: e.message
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

  } catch (error) {

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