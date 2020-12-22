const routerx = require('express-promise-router');
const usuarioController = require('../../controllers/UserController');
const auth = require('../../middlewares/auth');

const router = routerx();

router.post('/add', usuarioController.add);
router.get('/query', auth.verifyUsuario, usuarioController.query);
router.get('/list', usuarioController.list);
router.put('/update', usuarioController.update);
router.delete('/remove', auth.verifyUsuario, usuarioController.remove);
router.put('/activate',  usuarioController.activate);
router.put('/deactivate', usuarioController.deactivate);
router.post('/login', usuarioController.login);

module.exports = router;


