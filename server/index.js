require('module-alias/register')

const http = require('http')
const api = require('@root/app')

const mongoose = require('mongoose')
const db_config = require('@config')
const db = require('./db')(mongoose, db_config)

const host = 'localhost'
const port = '3000'
const server = http.createServer(api);

server.listen(port, host, _ => {
  console.log(`Server running at http://${host}:${port}/`);
});