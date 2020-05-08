const Category = require("../models/category");

/**
 * update a given subject under a category
 * @param {*} req 
 * @param {*} res 
 */
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { newName, newSubjects } = req.body

    let prevSubjects = await Category.findById(id).subjects

    if (!prevSubjects){
      prevSubjects = []
    }

    await Category.findByIdAndUpdate(id, { name: newName, subjects: [...prevSubjects, newSubjects] }, (err) => {
      if (err) throw new Error(err)
      res.status(201).json({
        message: "Successfully modified the category"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


/**
 * Deletes a given category
 * @param {*} req 
 * @param {*} res 
 */
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params

    await Category.findByIdAndDelete(id, (err) => {
      if (err) throw new Error(err)
      res.json({
        message: "successfully deleted category"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


module.exports = {
  updateCategory,
  deleteCategory
};