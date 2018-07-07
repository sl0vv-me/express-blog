const config = require('@config')

module.exports = (app) => {
  const api = app.api.post

  app.route('/api/v1/posts')
     .post(api.getList())

  app.route('/api/v1/posts/add')
     .post((req, res) => {
        const body = req.body
        const post = new Post({
          name: body.name,
          author: 'admin',
          content: body.content
        })  

        post.save(err => {
          if (!err) return res.status(200).json({ success: true })
          res.status(400).json({ succes: false })
        })
      })

  app.route('/api/v1/posts/:id')
     .get((req, res) => {
        const id = req.params.id

        Post.find({_id: id}, (err, post) => {
          if (err) return res.status(400).json({ succes: false })
          console.log(post.id)
          res.status(200).json(post)
        })
      })
}