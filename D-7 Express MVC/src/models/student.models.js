const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    roll_id: { type: Number },
    current_batch: { type: mongoose.Schema.Types.ObjectId, ref: 'batch', required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("student", studentSchema);
