const User = require('../models/user')
const jwt = require('jsonwebtoken')

const tokenHasExpired = async (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const rawAuthorization = req.headers.authorization;
      const token = rawAuthorization.slice(7, rawAuthorization.length);

      const { userId, exp } = await jwt.verify(token, process.env.JWT_SECRET);
      // If token has expired
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: "JWT token has expired, please login to obtain a new one"
        });
      }
      res.locals.loggedInUser = await User.findById(userId);
      next();
    } catch (error) {
      next();
    }
  } else {
    next();
  }
};

module.exports = tokenHasExpired