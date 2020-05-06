const { Router } = require("express");
const tutorController = require("../controllers/tutor");
const router = Router();

/**
 * Get all tutors
 */
router.get('/', tutorController.getAllTutors)

/**
 * Get single tutor
 */
router.get('/:id', tutorController.getTutor)


/**
 * Remove a tutor's rights
 */
router.delete('/:id', tutorController.removeTutorRights)

/**
 * Register to take a subject
 */
router.post('/:id/:subjectId', tutorController.registerSubject)


/**
 * get all subjects taken by a tutor
 */
router.get('/:id/subjects', tutorController.getSubjects)


module.exports = router;
