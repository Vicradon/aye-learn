const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/users");
const categoryRouter = require("./routes/categories");
const tokenHasExpired = require("./middleware/tokenHasExpired")

mongoose.connect("mongodb://localhost/ota", {
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

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
