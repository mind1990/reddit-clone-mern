const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/front_end');


module.exports = {
	User: require('./User'),
	TextPost: require('./textPost'),
	LinkPost: require('./LinkPost'),
	Comment: require('./Comment')
};