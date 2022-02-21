const { Router } = require("express");

//Inicializo la funcion Router
Router.get('/', getEnvios)
Router.post('/', postEnvios)
Router.put('/:id', putEnvios)
Router.delete('/:id', deleteEnvios)

module.exports = Router