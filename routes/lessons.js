const { Router } = require("express");
const lessonController = require("../controllers/lesson");
const router = Router();

// example of a lesson: Radioactivity in subject chemistry under category sss
/**
 * Create a lesson
 */
router.post('/new', lessonController.createLesson)

/**
 * Get all lessons
 */
router.get('/', lessonController.getAllLessons)

/**
 * Get single lesson
 */
router.get('/:id', lessonController.getLesson)

/**
 * Update a lesson
 */
router.patch('/:id', lessonController.updateLesson)


/**
 * Delete a lesson from available lesson
 */
router.delete('/:id', lessonController.deleteLesson)


module.exports = router;
