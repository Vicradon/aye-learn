const { Router } = require("express");
const categoryController = require("../controllers/category");
const router = Router();
const hasAccessTo = require('../controllers/utils/hasAccessTo')

router.patch('/:id',
  hasAccessTo('updateAny', 'category'),
  categoryController.updateCategory
)

router.delete('/:id',
  hasAccessTo('deleteAny', 'category'),
  categoryController.deleteCategory
)

module.exports = router;
