const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
    res.send('Hello From Admins')
})

module.exports = router
