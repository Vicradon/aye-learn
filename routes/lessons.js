const { Router } = require("express");
const lessonController = require("../controllers/lesson");
const hasAccessTo = require('../controllers/utils/hasAccessTo')

const router = Router();

// example of a lesson: Radioactivity in subject chemistry under category sss
/**
 * Create a lesson
 */
router.post('/new',
  hasAccessTo('createAny', 'lesson'),
  lessonController.createLesson
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
