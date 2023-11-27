const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});

const UserModel = model("users", UserSchema);

module.exports = UserModel;
