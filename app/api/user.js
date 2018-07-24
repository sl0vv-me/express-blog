const jwt = require('jsonwebtoken')
const models = require('@root/app/models')
const config = require('@config')
const User = models.User
const api = {}

api.signup = _ => (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email)
    return res.status(400).send({ success: false, message: 'Please, pass a username and password.' })
  
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    group: 2
  })

  user.save(err => {
    if (err) return res.status(400).send({ success: false, message:  'Username already exists.' })
    res.send({ success: true, message: 'Account created successfully' })
  })
}

api.login = _ => (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err

    if (!user) return res.status(401).send({ success: false, message: 'Authentication failed. User not found.' })

    user.comparePassword(req.body.password, (err, matches) => {
      if (matches && !err) {
        const token = jwt.sign({ user }, config('password_secret'))
        let expireTime = new Date(Date.now() + 1800000)

        res.cookie('token', token, { expires: expireTime, httpOnly: true })
        res.status(200).send({ success: true, message: 'Token granted', token })
      } else {
        res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' })
      }
    })
  })

}

module.exports = api