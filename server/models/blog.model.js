const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogSchema = new Schema({
    date: {type: Date, required: false},
    isActive: {type: Boolean, required: true},
    thumb: {type: String, required: false},
    picture: {type: String, required: false},
    title:{type: String, required: true},
    author: {
        first: {type: String, required: false},
        last: {type: String, required: false},
        picture: {type: String, required: false},
    },
    description: {type: String, required: false},
    fulltext: {type: String, required: false},
    tags: [String]
});

// Export the model
module.exports = mongoose.model('Blog', BlogSchema);