const { Router } = require("express");
const categoryController = require("../controllers/category");
const router = Router();
const hasAccessTo = require('../controllers/utils/hasAccessTo')

router.post('/new',
  hasAccessTo('createAny', 'category'),
  categoryController.createCategory
)

router.get('/:id/subjects',
  hasAccessTo('readAny', 'category'),
  categoryController.getSubjectsInCategory
)

router.get('/:id',
  hasAccessTo('readAny', 'category'),
  categoryController.getCategory
)

router.get('/',
  hasAccessTo('readAny', 'category'),
  categoryController.getAllCategories
)

router.patch('/:id',
  hasAccessTo('updateAny', 'category'),
  categoryController.updateCategory
)

router.delete('/:id',
  hasAccessTo('deleteAny', 'category'),
  categoryController.deleteCategory
)

module.exports = router;
