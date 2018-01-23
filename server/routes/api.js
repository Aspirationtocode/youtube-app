const express = require('express');
const path = require('path');

const router = express.Router();
const User = require('../models/user');

const uploadUserHandler = (req, res) => {
	const fileInfo = req.files.uploadUser;
	const fileExtension = path.extname(fileInfo.name);
	if (fileExtension === '.json') {
		const bufferData = fileInfo.data;
		const uploadedUser = JSON.parse(`${bufferData}`);
		const newUser = new User(uploadedUser);
		newUser.save(() => {
			console.log('new user saved.');
		});
	}
	res.redirect('back');
};

const getUserHandler = (req, res) => {
	const currentUserName = req.query.username;
	User.findOne({ name: currentUserName }, (err, user) => {
		if (user) {
			res.send(user);
		} else {
			res.status(500).send({ error: "Can't find user." });
		}
	});
};

router.post('/uploadUser', uploadUserHandler);

router.get('/user', getUserHandler);

module.exports = router;
