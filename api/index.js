const express = require('express')
const app = express()
const routes = require('./routes')



routes(app)

// LISTEN

app.listen(4002, () => console.log('Servidor rodando na porta 4002: localhost:4002'))

module.exports = app;