const { Router } = require("express");
const lessonController = require("../controllers/lesson");
const hasAccessTo = require('../controllers/utils/hasAccessTo')

const router = Router();

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

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//eyJ1c2VyIjoiNWViM2ZmNTc5MWQzMmUyZTYwYjI2OGJhIiwiaWF0IjoxNTg4OTM1OTYwLCJleHAiOjE1ODkwMjIzNjB9.
//3guetliJilmFrTSj62N4VPYQSg-McQP2p7f-mV-80Eo

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
//eyJ1c2VyIjoiNWViM2ZmNTc5MWQzMmUyZTYwYjI2OGJhIiwiaWF0IjoxNTg4OTM1OTYwLCJleHAiOjE1ODkwMjIzNjB9.
//3guetliJilmFrTSj62N4VPYQSg-McQP2p7f-mV-80Eo

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e
// yJ1c2VyIjoiNWViM2ZmNTc5MWQzMmUyZTYwYjI2OGJhIiwiaWF0IjoxNTg5MDI4OTY3LCJleHAiOjE1ODkxMTUzNjd9.
// neo6gB7iy8zdViObPKIbXzZ2XBqxHPAnT_6ynVBIhdA

/**
 * Delete a lesson from available lesson
 */
router.delete('/:id',
  hasAccessTo('deleteAny', 'lesson'),
  lessonController.deleteLesson
)


module.exports = router;
