const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('./comment').schema;

const TextPostSchema = new Schema({
	title: String, 
	content: String, 
	thumbnail_image_url: String, 
	votes: Number,
	comments: [CommentSchema],
	}, 
	{
  timestamps: true
});

const TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;