const app = require('express')
const router = app.Router()

const authRoutes = require('./AuthRouter');
const adminRoutes = require('./AdminsRouter');


router.use('/', authRoutes)
router.use('/admins', adminRoutes)


module.exports = router