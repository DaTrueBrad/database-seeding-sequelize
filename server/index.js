const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 4000
const { db } = require("./database")
const {Pet} = require('./models')
const {seedDatabase} = require('./seed')
// const db = require('./util/database')

//! Middleware
server.use(express.json())
server.use(cors())


//! endpoints
db
  // .sync()
  .sync({force:true})
  .then((res) => seedDatabase())

server.listen(PORT, () => console.log(`Running on Port ${PORT}`))