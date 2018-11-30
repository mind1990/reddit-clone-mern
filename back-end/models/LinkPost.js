const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = require('./comment').schema;

const LinkPostSchema = new Schema({
	title: String,
	link_url: String,
	thumbnail_image_url: String,
	vates: Number,
	comments: {
    commentAuthor: String,
    commentContent: String,
    commentDate: {
      type: Date,
      default: Date.now
    }
  }
});

const TextPost = mongoose.model('LinkPost', LinkPostSchema);

module.exports = TextPost;