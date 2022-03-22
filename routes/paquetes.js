const {Router} = require('express');
const { GetPaquetes, PostPaquetes, PutPaquetes, DeletePaquetes } = require('../controllers/paquetes');
const router = Router();

router.get('/', GetPaquetes)
router.post('/', PostPaquetes)
router.put('/:id', PutPaquetes)
router.delete('/:id', DeletePaquetes)

module.exports = router