const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const subjectRouter = require("./routes/subjects");
const tutorRouter = require("./routes/tutors");
const lessonRouter = require("./routes/lessons");
const tokenHasExpired = require("./middleware/tokenHasExpired")
const allowIfLoggedIn = require("./middleware/allowIfLoggedIn")
const hasAccessTo = require("./middleware/hasAccessTo")
const init = require('./init')
require("dotenv").config()

mongoose.connect("mongodb://localhost/aye-learn", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  init()
    .then(() => console.log("connected to mongo"))
    .catch(err => console.error(err))
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * The order of these middleswares are important
 * The auth route is public
 */
app.use("/auth", authRouter);

app.use(allowIfLoggedIn)
// app.use(hasAccessTo)

app.use("/categories", categoryRouter);
app.use("/subjects", subjectRouter);
app.use("/tutors", tutorRouter);
app.use("/lessons", lessonRouter);

// app.error(function (err, req, res, next) {
//   if (err instanceof NotFound) {
//     res.send('404.jade');
//   } else {
//     next(err);
//   }
// });

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

// init()
//   .then((data) => {
// console.log(data)
app.listen(process.env.PORT);
console.log('Server running at http://localhost:' + process.env.PORT + '/');
  // });

