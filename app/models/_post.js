const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

Schema.pre('save', function (next) {
  next()
})

mongoose.model('Post', Schema)