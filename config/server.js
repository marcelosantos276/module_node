const express = require('express')

const app = express()

app.set('view engine','ejs') // O express sabe que o EJS será nosso gerador de views

app.set('views', './app/views')

module.exports = app