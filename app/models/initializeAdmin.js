const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const Admin = mongoose.model('Admin', AdminSchema)
let a = new Admin({
  name: "Osinachi",
  email: 'test@email.com',
  password: 'testpassword'
})
console.log(a);

const initializeAdmin = () => {
  // try {
    return new Promise((resolve, reject) => {
      const admin = new Admin({
        name: "Osinachi",
        email: 'test@email.com',
        password: 'testpassword'
      })
      admin.save((err, data) => {
        if (err) reject(err)
        resolve(data)
        console.log(data)
      })
    })
      .then((result) => console.log(result))
      .then((error) => console.error(error))
  // } catch (error) {
  //   console.error(error)
  // }
}
initializeAdmin()