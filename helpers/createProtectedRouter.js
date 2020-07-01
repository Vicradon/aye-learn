const { withJWTAuthMiddleware } = require("express-kun");
const { Router } = require("express");


const createProtectedRouter = () =>{
  const router = Router();
  return withJWTAuthMiddleware(router, 'yourSecretKey');
};

module.exports = createProtectedRouter 