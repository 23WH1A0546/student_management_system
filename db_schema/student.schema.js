const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
    section: { type: String, required: true },
    marks: { type: Number },
    attendance: {
      type: String,
      enum: ["Present", "Absent"],
      default: "Absent"
    },
    grade: {
      type: String,
      enum: ["A", "B", "C", "D"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
