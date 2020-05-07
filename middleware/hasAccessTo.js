const ac = require('../roles')
const User = require('../models/user')

const hasAccessTo = async (req, res, next) => {
  try {
    const permission = ac.can(req.user.role).readAny('subject')
    console.log(permission)
    // if (permission === 0) {
    //   return res.status(401).json({
    //     error: "You don't have enough permission to perform this action"
    //   });
    // }
    next()
  } catch (error) {
    next(error)
  }
}
// const hasAccessTo = function (action, resource) {
//   return async (req, res, next) => {
//     try {
//       const permission = roles.can(req.user.role)[action](resource)._.attributes.length
//       console.log(permission)
//       if (permission === 0) {
//         return res.status(401).json({
//           error: "You don't have enough permission to perform this action"
//         });
//       }
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }
// }

module.exports = hasAccessTo