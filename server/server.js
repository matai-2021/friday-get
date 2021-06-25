const path = require('path')
const express = require('express')

const movies = require('./routes/movies')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/movies', movies)

module.exports = server