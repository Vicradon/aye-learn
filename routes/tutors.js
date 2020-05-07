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
 * Get single tutor
 */
router.get('/:id',
  hasAccessTo('readAny', 'tutor'),
  tutorController.getTutor
)


/**
 * Remove a tutor's rights
 */
router.patch('/:id',
  hasAccessTo('updateAny', 'tutor_rights'),
  tutorController.removeTutorRights
)


/**
 * Register to take a subject
 */
router.post('/:id/:subjectId',
  hasAccessTo('createAny', 'registered_subject'),
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
