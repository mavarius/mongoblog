const express = require('express')
const router = express.Router()

const BlogPost = require('../models/BlogPost')

router.route('/:id')
  .get((req, res) => {
    BlogPost.findById(req.params.id)
      .then(blogposts => res.send(blogposts))
      .catch(err => res.status(400).send(err))
  })
  .put((req, res) => {
    BlogPost.findByIdAndUpdate(req.params.id, req.body)
    .then(
      BlogPost.find({})
      .then(blogposts => res.send(blogposts))
      .catch(err => res.status(400).send(err))
    )
    .catch(err => res.status(400).send(err))
  })
  .delete((req, res) => {
    BlogPost.findByIdAndRemove(req.params.id)
      .then(
        BlogPost.find({})
        .then(blogposts => res.send(blogposts))
        .catch(err => res.status(400).send(err))
      )
      .catch(err => res.status(400).send(err))
  })

router.route('/')
  .get((req, res) => {
    BlogPost.find({})
      .then(blogposts => res.send(blogposts))
      .catch(err => res.status(400).send(err))
  })
  .post((req, res) => {
    BlogPost.create(req.body)
      .then(
        BlogPost.find({})
        .then(blogposts => res.send(blogposts))
        .catch(err => res.status(400).send(err))
      )
      .catch(err => res.status(400).send(err))
  })

module.exports = router
