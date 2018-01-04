const express = require("express");
const path = require("path");

const router = express.Router();
const User = require("../models/user");

router.get("/user", (req, res) => {
  User.find({}, (err, users) => {
    res.status(200);
    res.send(users);
  });
});

router.post("/uploadUser", function(req, res) {
  const fileInfo = req.files.uploadUser;
  const fileExtension = path.extname(fileInfo.name);
  if (fileExtension === ".json") {
    const bufferData = fileInfo.data;
    const uploadedUser = JSON.parse(`${bufferData}`);
  }
  res.redirect("back");
});

module.exports = router;
