const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true, minlength: 3, maxlength: 30},
        lastName: {type: String, required: false, minlength: 3, maxlength: 30},
        age: {type: Number, required: true, min: 2, max: 150},
        email: {type: String, required: true, unique: true},
        profileImages: [],

    },
    {
        timestamps: true,
        versionKey: false,
    },
);

module.exports = mongoose.model('users', userSchema);