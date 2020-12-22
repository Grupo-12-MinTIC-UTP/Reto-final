const articleRouter = require('./api/article')
const routerx = require('express-promise-router');
const categoriaRouter = require('./api/category');
const registerRouter = require('./api/users')
const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articleRouter);
router.use('/usuario', registerRouter);
module.exports = router;
