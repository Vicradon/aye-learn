const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const subjectRouter = require("./routes/subjects");
const tutorRouter = require("./routes/tutors");
const lessonRouter = require("./routes/lessons");
// const tokenHasExpired = require("./middleware/tokenHasExpired")
const allowIfLoggedIn = require("./middleware/allowIfLoggedIn")
const init = require('./init')
require("dotenv").config()

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false 
}).then(() => {
  init()
    .then(() => console.log("connected to mongo"))
    .catch(err => console.error(err))
});


app.get('/', (_, res) => res.json({message: "There's nothing here"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * The order of these middleswares are important
 * The auth route is public
 */
app.use("/api/v1/auth", authRouter);

app.use(allowIfLoggedIn)
// app.use(hasAccessTo)

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/tutors", tutorRouter);
app.use("/api/v1/lessons", lessonRouter);



app.listen(process.env.PORT);
console.log('Server running at http://localhost:' + process.env.PORT + '/');
