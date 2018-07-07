module.exports = (app) => {
  const api = app.api.user

  app.route('/api/v1/reg')
      .post(api.signup())

  app.route('/api/v1/auth')
     .post(api.login())
}