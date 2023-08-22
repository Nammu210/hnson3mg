const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Enter the Name"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  contact: {
    type: String,
  },
  salary: {
    type: Number,
  },
  overallExp: {
    type: Number,
  },
  yearGrad: {
    type: String,
  },
  lastCompany: {
    type: String,
  },
});

const student = mongoose.model("studentInfo", studentSchema);

module.exports = student;
