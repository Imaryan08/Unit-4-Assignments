const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        likes: {type: Number, min: 0, default: 0},
        coverImage: {type: String, required: true},
        content: {type: String, required: true}, 
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

module.exports = mongoose.model('book', bookSchema);