const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    gender: { type: String, enum: ["male", "female"] },
    dateOfBirth: { type: Date },
    type: { type: String, enum: ["student", "admin", "instructor"] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", userSchema);
