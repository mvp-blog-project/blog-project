const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/blogs";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db