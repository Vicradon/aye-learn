const Category = require("../models/category");

const create = async (req, res) => {
  try {
    const { name, subjects } = req.body
    const category = await Category.create({
      name,
      subjects
    })
    res.json({
      category,
      message: "create category successfully"
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

module.exports = {
  create
};