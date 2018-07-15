module.exports = (app) => {
  const api = app.api.user

  app.route('/api/v1/signup')
      .post(api.signup())

  app.route('/api/v1/login')
     .post(api.login())
}