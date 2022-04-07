const express = require('express')
const pessoas = require('./pessoasRouter')
const veiculo = require('./veiculoRouter')
const vaga = require('./vagaRouter')

module.exports = app =>{
    app.use(express.json())
    app.use(pessoas)
    app.use(veiculo)
    app.use(vaga)
}