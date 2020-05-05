const { Router } = require("express");
const userController = require("../controllers/user");
const router = Router();
const createProtectedRouter = require('../helpers/createProtectedRouter')

const protectedRouter = createProtectedRouter();
router.get('/stuff', (req, res) => {
  res.send("hello")
})
router.post("/", userController.create);

protectedRouter.get("/", userController.getAll);
protectedRouter.get("/:id", userController.get);

module.exports = { router, protectedRouter };