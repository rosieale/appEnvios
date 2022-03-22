const {Router} = require('express');
const {
    getDetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
} = require('../controllers/detallesEnvios');
//Uso { Router } para destructurar un ob jeto y solo obtener lo que se ocupo de el

const router = Router();
//Inicializo la funcion Router
router.get('/', getDetallesEnvios)
router.post('/', postDetallesEnvios)
router.put('/', putDetallesEnvios)
router.delete('/', deleteDetallesEnvios)

module.exports = router