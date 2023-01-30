const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./model/User");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(
    "mongodb+srv://nortoy13:nortoy13@cluster1.jmktdxc.mongodb.net/task6",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then((result) => app.listen(process.env.PORT || 3001))
  .catch((err) => console.log(err));

app.get("/getUsers", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  console.log(req.body);
  const newUser = new User(user);
  await newUser.save();
  res.json(user);
});
