const { Router } = require("express");
const tutorController = require("../controllers/tutor");
const router = Router();
const hasAccessTo = require('../controllers/utils/hasAccessTo')


/**
 * Get all tutors
 */
router.get('/',
  hasAccessTo('readAny', 'tutor'),
  tutorController.getAllTutors
)

/**
 * Search tutor by firstname
 */
router.get('/search?',
  hasAccessTo('readAny', 'profile'),
  tutorController.searchTutor
)

/**
 * Get single tutor
 */
router.get('/:id',
  hasAccessTo('readAny', 'tutor'),
  tutorController.getTutor
)


/**
 * Remove a tutor's rights
 */
router.delete('/:id',
  hasAccessTo('deleteAny', 'tutor'),
  tutorController.removeTutorRights
)


/**
 * Register to take a subject
 */
router.patch('/:id/:subjectId',
  hasAccessTo('updateOwn', 'profile'),
  tutorController.registerSubject
)


/**
 * get all subjects taken by a tutor
 */
router.get('/:id/subjects',
  hasAccessTo('readOwn', 'registered_subject'),
  tutorController.getSubjects
)


module.exports = router;
