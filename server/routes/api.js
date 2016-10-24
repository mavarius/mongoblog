const express = require('express')
const router = express.Router()

router.use('/blogposts', require('./blogposts'))

module.exports = router
