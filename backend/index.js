const connectMongo = require("./mongo/mongodb.js");
const express = require("express");
const cors = require("cors");
const userModel = require("./mongo/user.js");

const app = express();

connectMongo();
app.use(cors());
app.use(express.json());

app.post("/user", (req, res) => {
  const body = req.body;
  console.log(req.body);
  const model = {
    username: body.username,
    password: body.password,
    firstname: body.firstname,
    lastname: body.lastname,
  };
  userModel.UserModel.create(model);
  res.status(200).json(model);
});

app.get("/users", async (req, res) => {
  const userData = await userModel.UserModel.find();
  res.status(200).json({ userData });
});

app.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  const userData = await userModel.UserModel.find();
  const filt = userData.filter((element) => {
    if (element.username == username) {
      return element;
    }
  });
  res.json(filt);
});

app.get("/users/highscore", async (req, res) => {
  const userData = await userModel.ScoreModel.find();
  res.status(200).json({ userData });
});

app.post("/user/highscore", (req, res) => {
  const model = {
    username: req.body.username,
    highscore: req.body.highscore,
  };
  userModel.ScoreModel.create(model);
  res.json(model);
});

app.listen(8080);
