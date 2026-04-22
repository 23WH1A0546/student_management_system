const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- MONGODB ---------------- */
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log(err));

/* ---------------- ROUTES ---------------- */
const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

/* ---------------- START ---------------- */
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});