const express = require('express')
const app = express()
const config = require('@config')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const consign = require('consign')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

module.exports = db => {
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use(session({
    secret: config('session_secret'),
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db.connection })
  }))
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  consign({cwd: 'app'})
    .include('api')
    .include('routes')
    .into(app)

  return app
}
