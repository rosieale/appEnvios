const {Router} = require('express')
//Uso {Router} para destricturar un objeto y solo obtener lo que ocupo de el
const router = Router ();
//Inicializó la función Router
router.get('/', (req, res) => res.send('GET Endpoint para Precios'))
router.post('/', (req, res) => res.send('POST Enpoint para Precios'))
router.put('/', (req, res) => res.send('PUT Enpoint para Precios'))
router.delete('/', (req, res) => res.send('DELETE Enpoint para Precios')) 

module.exports = router

router.get('/paquetes', (req, res) => res.send('Enpoint para Paquetes'))