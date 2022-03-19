const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema(
  {
    accountNumber: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("fixedAccount", fixedAccountSchema);
