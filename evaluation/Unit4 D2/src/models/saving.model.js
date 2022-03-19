const mongoose = require("mongoose");

const savingAccountSchema = new mongoose.Schema(
    {   
        accountNumber : {type: Number, required: true, unique: true},
        balance: {type: Number, required: true},
        interestRate: {type: Number, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

module.exports = mongoose.model('savingAccount', savingAccountSchema);