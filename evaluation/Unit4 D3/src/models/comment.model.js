const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        body: {type: String, required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

module.exports = mongoose.model('comment', commentSchema);