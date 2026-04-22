const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  branch: String,
  section: String,

  marks: {
    sub1: { type: Number, default: 0 },
    sub2: { type: Number, default: 0 },
    sub3: { type: Number, default: 0 },
    sub4: { type: Number, default: 0 },
    sub5: { type: Number, default: 0 },
  },

  attendance: { type: Number, default: 0 },
  grade: { type: String, default: "N/A" },
});

module.exports = mongoose.model("Student", studentSchema);