const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    Batch_Name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("batch", batchSchema);
