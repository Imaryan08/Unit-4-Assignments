const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: false},
        email: {type: String, required: true, unique: true},
        pincode: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, enum: ['male', 'female', 'others'], default: 'male'},
    },
    {   
        timestamps: true,
        versionKey: false,
    },
)

module.exports = mongoose.model('user', userSchema);