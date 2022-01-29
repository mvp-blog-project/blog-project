const mongoose = require("mongoose");
const db = require("./index.js");

const blogSchema =new mongoose.Schema({
  title:String,
  blog:String,
  img:String,
  category:String
});

const Blog = mongoose.model('blog',blogSchema);

module.exports = Blog;