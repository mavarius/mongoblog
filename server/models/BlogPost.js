const mongoose = require('mongoose')

const blogpostSchema = new mongoose.Schema({
  title: String,
  date: {type: Date, default: Date.now},
  author: String,
  postBody: String
})

const BlogPost = mongoose.model('BlogPost', blogpostSchema)

module.exports = BlogPost
