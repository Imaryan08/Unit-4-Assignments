const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {type: mongoose.Schema.Types.ObjectId, ref: 'evaluation', required: true},
    student_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    marks: {type: Number},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("submission", submissionSchema);


"/submission/:evalId"