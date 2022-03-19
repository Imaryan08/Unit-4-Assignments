const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema(
  {
    balance: { type: Number, required: true },
    userId: {type: mongoose.Schema.Types.ObjectId , ref: 'user', required: true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("masterAccount", masterAccountSchema);
