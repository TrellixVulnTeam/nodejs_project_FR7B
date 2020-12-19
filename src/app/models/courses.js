const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete= require('mongoose-delete');


const course = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
// add plugins
mongoose.plugin(slug);
course.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods:'all'});

module.exports = mongoose.model('Course', course);
