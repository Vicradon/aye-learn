const { Router } = require("express");
const subjectController = require("../controllers/category");
const router = Router();

router.post("/create", subjectController.createSubject);

router.patch('/:id', subjectController.updateSubject)

router.delete('/:id', subjectController.deleteSubject)

module.exports = router;

/*
demo subject document
{
  name: 'some name',
  _id: 'some id',
  category: jss
}

demo category document
{
  name: 'jss',
  _id: 'category id',
  subjects: [id1, id2, id3]
}


getAllSubject('jss'){
  arr = db.findById('category id').subjects
  subjectCollect.getArrayOfTheseIds(arr)
}

*/