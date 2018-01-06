const mongoose = require('mongoose');
const Theme = require('./theme');

const { Schema } = mongoose;

const UserSchema = new Schema({
	name: String,
	photoURL: String,
	themes: [Theme.schema],
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
