const express = require('express')

const msg = require('../mod_teste')

const app = express()

app.listen(3000,'localhost', () => {
    console.log(msg()) // Colocando apenas msg retorna [Function (anonymous)], precisamos color msg() para executar a função corretamente 
})