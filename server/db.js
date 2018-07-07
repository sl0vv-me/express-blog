module.exports = (mongoose, config) => {
  const database = mongoose.connection

  mongoose.Promise = Promise
  mongoose.connect(config.database, {
    promiseLibrary: global.Promise
  })

  database.on('error', err => console.log(`Connection to database failed: ${err}`))
  database.on('connected', _ => console.log('Connected to database'))
  database.on('disconnected', _ => console.log('Disconnected from database'))

  process.on('SIGINT', _ => {
    database.close( _ => {
      console.log('Connection closed')
      process.exit(0)
    })
  })
}