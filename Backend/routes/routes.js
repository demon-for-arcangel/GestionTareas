const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UserController');
const adminMiddleware = require('../middlewares/adminMiddleware')

router.get('/', usuarioController.usuarioGet);
router.post('/usuarios', adminMiddleware.esAdmin, usuarioController.usuarioPost);
router.put('/usuarios/:id', adminMiddleware.esAdmin, usuarioController.usuarioPut);
router.delete('/usuarios/:id', adminMiddleware.esAdmin, usuarioController.usuarioDelete);

module.exports = router;