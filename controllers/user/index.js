const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { grantAccess, allowIfLoggedin } = require('./roles')


async function create(req, res) {
try {
    const { email, password } = req.body;

    const user = await User.create({
      email,
      password
    });

    const token = jwt.sign({ user }, "yourSecretKey", {
      expiresIn: "24h"
    });

    res.json({
      user,
      token,
      message: "create user successfully"
    });
  } catch (error) {
    res.json({
      message: error.message
    })
  }
}

async function login(req, res) {
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
      const accessToken = jwt.sign({ user }, "yourSecretKey", {
        expiresIn: "24h"
      });
      await User.findByIdAndUpdate(user._id, { accessToken })
      res.status(200).json({
        user,
        token,
        role: user.role,
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

async function getAll(req, res) {
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

async function get(req, res) {
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

module.exports = {
  create,
  login,
  get,
  getAll,
};