const routerx = require('express-promise-router');
const articleController = require('../../controllers/ArticleController');
const auth = require('../../middlewares/auth')

const router = routerx();
router.post('/add', articleController.add);
router.get('/query', auth.verifyUsuario, articleController.query);
router.get('/list', articleController.list);
router.put('/update', articleController.update);
router.delete('/remove', auth.verifyUsuario, articleController.remove);
router.put('/activate', articleController.activate);
router.put('/deactivate', articleController.deactivate);
module.exports = router;