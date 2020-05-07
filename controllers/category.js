const Category = require("../models/category");

/**
 * update a given subject under a category
 * @param {*} req 
 * @param {*} res 
 */
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { newName } = req.body
    const exists = Category.findById(id)

    if (!exists) {
      throw new Error("The provided id doesn't map to a category")
    }

    await Category.findByIdAndUpdate(id, { name: newName }, (err) => {
      if (err) throw new Error("An error occured")
    })

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
  updateCategory,
  deleteCategory
};