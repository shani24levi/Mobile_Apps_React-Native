const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: String,
  email: String,
  pass: String,
  avatar: String,
  date_time: {
    type: Date, default: Date.now
  },
});
const userModel = mongoose.model("users",userSchema);
exports.userModel = userModel;
