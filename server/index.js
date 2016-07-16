'use strict'

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(`${__dirname}/public`))

app.all('/*', function (req, res) {
  if (req.originalUrl.indexOf('.') !== -1) {
    res.sendStatus(404)
  } else if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
    res.sendFile(path.resolve(`${__dirname}/client/noughts.html`))
  } else {
    res.sendStatus(404)
  }
})

