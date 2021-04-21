//main entry point to application
const express = require('express')
const dotenv = require('dotenv')

//LOAD env vars
dotenv.config({ path: './config/config.env' })

const app = express()
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
) // in order to run a server
