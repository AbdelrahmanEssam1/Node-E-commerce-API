const app = require('express')
const router = app.Router()
const { setStatus, userBalance } = require('../../Controllers/dashboard/UsersController')
const { mustBeAdmin } = require('./../../Middlewares/authenticatedAdmin')

router.post('/user/status/', mustBeAdmin, setStatus)

router.post('/user/balance/', mustBeAdmin, userBalance)

module.exports = router
