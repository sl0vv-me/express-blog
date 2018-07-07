const mongoose = require('mongoose')
require('./_post')
require('./_user')

const models = {
  Post: mongoose.model('Post'),
  User: mongoose.model('User')
}

module.exports = models