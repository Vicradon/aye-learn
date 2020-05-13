const User = require('../models/user')
const Subject = require('../models/subject')

const getAllTutors = async (req, res) => {
  try {
    await User.find({}, (err, tutors) => {
      if (err) throw new Error(err);
      res.json({
        tutors,
        message: "All tutors"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

const getTutor = async (req, res) => {
  try {
    const { id } = req.params
    await Tutor.findById(id, (err, tutor) => {
      if (err) throw new Error(err);
      res.json({
        tutor,
        message: "The requested tutor"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}



/**
 * Search a tutor by first name
 * @param {*} req 
 * @param {*} res 
 */
const searchTutor = async (req, res) => {
  try {
    const { name: rawName } = req.query
    const name = rawName.trim().split(' ')
      .map(x => x.toLowerCase())
      .filter(Boolean)
      .join(' ');

    const searchTermRegex = new RegExp(name, 'gi');
    await User.find({role: "tutor"}, (err, tutors) => {
      if (err) throw new Error(err);
      const matchingTutors = tutors
        .filter(x => {
          if (x.name) {
            return x.name.match(searchTermRegex)
          }
          return 
        })
        .sort((a, b) => a.name.localeCompare(b.name))

      res.json({ matchingTutors, "message": "All matching tutors" })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * remove tutor rights
 * @param {*} req 
 * @param {*} res 
 */
const removeTutorRights = async (req, res) => {
  const { id } = req.params
  try {
    await User.findByIdAndUpdate(id, { role: 'student' }, (err, user) => {
      if (err) throw new Error(err)
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
 * Let a tutor register a subject
 * This links the subject's id to the tutor's
 * list of subjects
 * 
 * It also links the tutor's id to the subject's list of
 * tutors, though this is secondary
 * @param {*} req 
 * @param {*} res 
 */
const registerSubject = async (req, res) => {
  try {
    const { id, subjectId } = req.params


    await User.findByIdAndUpdate(id, { registerSubjects: [subjectId] }, (err, tutor) => {
      if (err) throw new Error(err);
      res.json({ tutor, message: "Successfully register the tutor to take the subject" })
    });
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
  getSubjects,
  searchTutor
}