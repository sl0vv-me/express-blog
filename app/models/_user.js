const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  group: {
    type: Number,
    required: true
  }
})

Schema.pre('save', function (next) {
  const user = this

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
      })
    })
  } else next();
})

Schema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, matches) => {
    if (err) return callback(err);
    callback(null, matches);
  });
};

mongoose.model('User', Schema)