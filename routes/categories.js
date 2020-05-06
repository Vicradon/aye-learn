const { Router } = require("express");
const categoryController = require("../controllers/category");
const router = Router();

router.post("/create", categoryController.create);

// router.get('/', categoryController.getAll)
// router.get('/:category/subjects', categoryController.getAllSubjects)
// router.get('/:category/subjects/:id', categoryController.getSubject)
// router.post('/:category/subjects/search?name=', categoryController.searchSubjectByName)
// router.get('/:category/tutors', categoryController.getAllTutors)


module.exports = router;
