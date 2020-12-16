const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', course);
