const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// import API
const empAPI = require("./API/empAPI");

// use API
app.use("/api/emp", empAPI);
// connect DB
mongoose.connect("mongodb://127.0.0.1:27017/employeesDB")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});