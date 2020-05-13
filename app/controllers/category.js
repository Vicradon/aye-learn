const Category = require("../models/category");
const Subject = require("../models/subject");

/**
 * Create a new category and link to a category
 * @param {*} req 
 * @param {*} res 
 */
const createCategory = async (req, res) => {
  try {
    const { name } = req.body
    let exists
    await category.findOne({ name }, (err, data) => {
      if (err) throw new Error(err)
      exists = data
    })

    if (exists) {
      throw new Error("This category is already available")
    }
    const category = new Category({ name })

    await category.save((err) => {
      if (err) throw new Error(err)
      res.status(201).json({
        category,
        message: "Successfully created the category"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}



/**
 * get all available categories
 * @param {*} req 
 * @param {*} res 
 */
const getAllCategories = async (req, res) => {
  try {
    await Category.find({}, (err, categories) => {
      if (err) throw new Error(err);
      res.json({
        categories,
        message: "All categories"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

/**
 * get a category by id
 * @param {*} req 
 * @param {*} res 
 */
const getCategory = async (req, res) => {
  try {
    const { id } = req.params
    await Category.findById(id, (err, category) => {
      if (err) throw new Error(err);
      res.json({
        category,
        message: "category"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}



/**
 * get subjects in a category
 * @param {*} req 
 * @param {*} res 
 */
const getSubjectsInCategory = async (req, res) => {
  try {
    const { id } = req.params
    await Category.findById(id, (err, category) => {
      if (err) throw new Error(err);
      const subjects = category.subjects;
      res.json({
        subjects,
        message: "Subjects in a category"
      })
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}




/**
 * update a given category under a category
 * @param {*} req 
 * @param {*} res 
 */
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { newName, newcategorys } = req.body

    let prevcategorys = await Category.findById(id).categorys

    if (!prevcategorys) {
      prevcategorys = []
    }

    await Category.findByIdAndUpdate(id, { name: newName, categorys: [...prevcategorys, newcategorys] }, (err) => {
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

    await Category.findByIdAndDelete(id, (err, data) => {
      if (err) throw new Error(err)
      const subjectIds = data.subjects;
      Subject.deleteMany({ _id: subjectIds }, (err) => { if (err) throw new Error(err) })
      res.json({
        message: "successfully deleted category and linked subjects"
      })
    })
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}


module.exports = {
  createCategory,
  getCategory,
  getSubjectsInCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
};