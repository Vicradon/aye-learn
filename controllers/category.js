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
    const exists = Category.findById(id)

    if (!exists) {
      throw new Error("The provided id doesn't map to a category")
    }
    const prevSubjects = await Category.findById(id, { projection: { subject: 1, _id: 0 } }).toArray((err, items) => {
      if (err) throw new Error("An error occured")
    });

    await Category.findByIdAndUpdate(id, { name: newName, subjects: [...prevSubjects, newSubjects] }, (err) => {
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
 * Deletes a given category
 * @param {*} req 
 * @param {*} res 
 */
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params

    const category = Category.findByIdAndDelete(id, (err) => {
      if (err) throw new Error(err)
    })
    if (!category) {
      throw new Error("No such category exists")
    }
    res.json({
      message: "successfully deleted category"
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