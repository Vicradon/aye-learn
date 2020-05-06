const User = require('../models/user')

const tokenHasExpired = async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    const accessToken = req.headers["x-access-token"];
    const { userId, expiryDate } = await jwt.verify(accessToken, process.env.JWT_SECRET);
    // Check if token has expired
    if (expiryDate < Date.now().valueOf() / 1000) {
      return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" });
    }
    res.locals.loggedInUser = await User.findById(userId); next();
  } else {
    next();
  }
}

module.exports = tokenHasExpired