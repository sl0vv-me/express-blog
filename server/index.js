require('module-alias/register')

const http = require('http')
const mongoose = require('mongoose')
const config = require('@config')
const db = require('./db')(mongoose, config)
const app = require('@root/app')(db)

const host = 'localhost'
const port = '3000'
const server = http.createServer(app);

server.listen(port, host, _ => {
  console.log(`Server running at http://${host}:${port}/`);
});

