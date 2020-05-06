const { Router } = require("express");
const categoryController = require("../controllers/category");
// const { withJWTAuthMiddleware } = require("express-kun");
const router = Router();

// const protectedRouter = withJWTAuthMiddleware(router, "yourSecretKey");

// protectedRouter.post("/create", categoryController.create);
router.post("/create", categoryController.create);

module.exports = router;