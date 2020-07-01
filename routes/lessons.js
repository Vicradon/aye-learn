const { Router } = require("express");
const lessonController = require("../controllers/lesson");
const hasAccessTo = require('../controllers/utils/hasAccessTo')

const router = Router();

/**
 * Create a lesson
 */
router.post('/book',
  hasAccessTo('createAny', 'lesson'),
  lessonController.bookLesson
)

/**
 * Get all lessons
 */
router.get('/',
  hasAccessTo('readAny', 'lesson'),
  lessonController.getAllLessons
)

/**
 * Get single lesson
 */
router.get('/:id',
  hasAccessTo('readAny', 'lesson'),
  lessonController.getLesson
)

/**
 * Update a lesson
 */
router.patch('/:id',
  hasAccessTo('updateAny', 'lesson'),
  lessonController.updateLesson
)

/**
 * Delete a lesson from available lesson
 */
router.delete('/:id',
  hasAccessTo('deleteAny', 'lesson'),
  lessonController.deleteLesson
)


module.exports = router;
