const mongoose = require("mongoose");
const url = "mongodb+srv://ariunbold:20090127@cluster0.eoia490.mongodb.net/";
const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("successfully connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
