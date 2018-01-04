const express = require("express");
const path = require("path");

const router = express.Router();
const User = require("../models/user");

const uploadUserHandler = (req, res) => {
  const fileInfo = req.files.uploadUser;
  const fileExtension = path.extname(fileInfo.name);
  if (fileExtension === ".json") {
    const bufferData = fileInfo.data;
    const uploadedUser = JSON.parse(`${bufferData}`);
    const newUser = new User(uploadedUser);
    newUser.save(() => {
      console.log("new user saved.");
    });
  }
  res.redirect("back");
};

const getUserHandler = (req, res) => {
  const currentUserName = req.query.username;
  User.findOne({ name: currentUserName }, (err, user) => {
    res.send(user);
    // if (user) {
    // 	res.status(200);
    // 	res.statusMessage = 'User is already a chat member';
    // 	res.send({
    // 		name: user.name,
    // 		surname: user.surname,
    // 		age: user.age,
    // 		id: user._id.toString(),
    // 	});
    // } else {
    // 	const user = new User({
    // 		name: currentName,
    // 		surname: currentSurname,
    // 		age: currentAge,
    // 	});
    // 	user.save(() => {
    // 		console.log('done.');
    // 	});
    // 	res.status(200);
    // 	res.send({
    // 		name: user.name,
    // 		surname: user.surname,
    // 		age: user.age,
    // 		id: user._id.toString(),
    // 	});
    // }
  });
};

router.post("/uploadUser", uploadUserHandler);

router.get("/user", getUserHandler);

module.exports = router;
