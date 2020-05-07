const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/users");
const categoryRouter = require("./routes/categories");
const subjectRouter = require("./routes/subjects");
const tokenHasExpired = require("./middleware/tokenHasExpired")
require("dotenv").config()

mongoose.connect("mongodb://localhost/aye-learn", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("connected to mongo");
});

app.use(tokenHasExpired)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/subjects", subjectRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
