const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String},
        lastName: {type: String},
        age: {type: Number},
        email: {type: String},
        profileImages: [{type: String}],
        isAuthor: {type: Boolean, default: false},
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

module.exports = mongoose.model('users', userSchema);