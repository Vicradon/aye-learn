const roles = require('../../roles')
const hasAccessTo = function (action, resource) {
  return async (req, res, next) => {
    try {
      const permission = Boolean(roles.can(req.user.role)[action](resource)._.attributes.length)
      if (!permission) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action"
        });
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = hasAccessTo