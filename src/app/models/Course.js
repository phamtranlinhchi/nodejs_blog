const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true, maxLength: 255 },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Course', Course);
