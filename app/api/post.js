const models = require('@root/app/models')
const Post = models.Post
const api = {}

api.getList = (params = {}) => (req, res) => {
  Post.find(params, (err, posts) => {
    if (err) return res.status(400).send({ succes: false })
    res.status(200).send(posts)
  })
}

module.exports = api