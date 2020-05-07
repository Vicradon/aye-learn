const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.create({
      email,
      password,
      role
    });

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });
    user.token = token
    await user.save()

    res.json({
      user,
      message: "Signed up successfully"
    });
  } catch (error) {
    res.json({
      message: error.message
    })
    next(error)
  }
}


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    });

    if (!user) {
      res.status(401).json({
        message: "User not found"
      });
      throw new Error("User not found");
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ user: user._id  }, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });
      
      await User.findByIdAndUpdate(user._id, { token })
      res.status(200).json({
        user,
        message: "logged in successfully"
      });
    } else {
      res.status(401).json({
        message: "Password incorrect"
      });
    }
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

module.exports = {
  signup,
  login
};