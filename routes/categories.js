const { Router } = require("express");
const categoryController = require("../controllers/category");
const router = Router();

router.patch('/:id', categoryController.updateCategory)

router.delete('/:id', categoryController.deleteCategory)

module.exports = router;
