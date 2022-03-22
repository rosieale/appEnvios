const { Router } = require("express")
const { GetSeguimientos, PostSeguimientos, PutSeguimientos, DeleteSeguimientos } = require("../controllers/seguimiento")
const router = Router()

router.get('/', GetSeguimientos)
router.post('/', PostSeguimientos)
router.put('/:idEnvio', PutSeguimientos)
router.delete('/:idEnvio', DeleteSeguimientos)

module.exports = router