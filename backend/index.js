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
  userModel.create(model);

  res.status(200).json(model);
});

app.get("/users", async (req, res) => {
  const userData = await userModel.find();
  res.status(200).json({ userData });
});
app.get("/user:username", async (req, res) => {
  const { username } = req.params;
  const userData = await userModel.find();
  const filt = userData.filter((element) => {
    if (element.username === username) {
      return element;
    }
    return "user not found";
  });
  res.status(200).json({ filt });
});
app.listen(8080);
