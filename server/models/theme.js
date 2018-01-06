const mongoose = require('mongoose');

const { Schema } = mongoose;

const ThemeSchema = new Schema({
	themeTitle: String,
	questions: [{ title: String, answers: [String] }],
});

const Theme = mongoose.model('theme', ThemeSchema);

module.exports = Theme;
