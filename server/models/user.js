const mongoose = require("mongoose");
const Theme = require("./theme");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  themes: [Theme.schema]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
