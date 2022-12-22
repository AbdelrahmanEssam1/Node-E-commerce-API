const app = require('express')
const router = app.Router()


router.get('/login', (req, res) => {
    const { email, password } = req.query;

    if (!email || !password) {
        error = { error: "no email or password" };
        console.log(`error`, error);
        return res.status(401).send(error);
}

login({ email, password })
    .then(user => {
    console.log('user', user);
    return res.status(200).send(user);
    })
    .catch(err => {
    console.log(`err`, err.message);
    return res.status(401).send({ error: err.message });
    });
});



router.get('/register', (req, res) => {
    const { name, email, password } = req.query;
    if (!name || !email || !password) {
        return res.status(401).send({ error: "missing user data" });
    }
    register({ name, email, password })
        .then(user => {
        console.log(`Added user`, user);
        return res.status(200).send(user);
        })
        .catch(err => {
        console.log(`err`, err);
        return res.status(401).send({ error: err.message });
        });
});

module.exports = router
