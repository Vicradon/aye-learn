const { Router } = require("express");
const subjectController = require("../controllers/subject");
const router = Router();
const hasAccessTo = require('../controllers/utils/hasAccessTo')


router.get("/",
  hasAccessTo('readAny', 'subject'),
  subjectController.getAllSubjects
);

router.get("/search?",
  hasAccessTo('readAny', 'subject'),
  subjectController.searchSubject
);

router.get("/:id",
  hasAccessTo('readAny', 'subject'),
  subjectController.getSubject
);

router.post("/new",
  hasAccessTo('createAny', 'subject'),
  subjectController.createSubject
);

router.patch('/:id',
  hasAccessTo('updateAny', 'subject'),
  subjectController.updateSubject
)

router.delete('/:id',
  hasAccessTo('deleteAny', 'subject'),
  subjectController.deleteSubject
)

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