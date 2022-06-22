const { Router } = require('express')
const LoginController = require('../controllers/LoginController')
const midle = require('../Midlewares')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()

router.get('/usuario', midle, UsuariosController.pegartodasOsUsuarios)
router.get('/usuario/:id', midle, UsuariosController.pegaUmUsuario)
router.post('/usuario', UsuariosController.criaUsuario)
router.put('/usuario/:id', UsuariosController.atualizaUsuario)
router.delete('/usuario/:id', UsuariosController.apagaUsuario)


router.post('/usuarioLogin', LoginController.index)

module.exports = router