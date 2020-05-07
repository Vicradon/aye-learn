const jwt = require('jsonwebtoken')

const allowIfLoggedin = async (req, res, next) => {
  try {
    let token
    if (req.headers.authorization) {
      token = req.headers.authorization.slice(7);
    }

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({
            error: "You're forbidden from accessing this route"
          });
        }
        req.user = user.user;
        next();
      })
    } else {
      return res.status(401).json({
        error: "You need to be logged in to access this route"
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = allowIfLoggedin