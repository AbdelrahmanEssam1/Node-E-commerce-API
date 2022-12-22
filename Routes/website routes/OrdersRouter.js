const app = require('express')
const router = app.Router()

router.get('/', (req, res) => {
    res.send('Hello From Orders')
})

module.exports = router
