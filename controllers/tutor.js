const { hasAccessTo, allowIfLoggedin } = require('./utils/rbac')

const getAll = async (req, res) => {
  try {
    const user = await User.find({});
    res.json({
      user,
      message: "All users listed"
    });
  } catch (error) {
    res.json({
      message: e.message
    })
  }
}

const get = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.params.id,
    }, (err, user) => {
      if (err) console.error(err)
    });
    res.json({
      user,
      message: "User found!"
    })
  } catch (e) {
    res.json({
      message: e.message
    })
  }
}
