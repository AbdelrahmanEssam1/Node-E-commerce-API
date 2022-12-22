const router = require('express').Router()
const usersController = require('./../../Controllers/website/UsersController')

/* All Routes Will Be Followed after www.domain.com/users */

// Get All Users
router.get('/', (req, res) => {
    const { limit = 10 } = req.query;

    usersController.getAllUsers(limit)
        .then(users => {
            return res.status(200).send(users);
        })
        .catch(err => {
            return res.status(404).send({ error: err.message });
        });
}); 

// Get User By Id
router.get('/user/:id', (req, res) => {
    const id = req.params.id;

    if (!id) return res.status(404).send({ err: "Missing Data Parameter" });

    usersController.getUser(id)
        .then(user => {
        return res.status(200).send(user);
        })
        .catch(err => {
        return res.status(404).send({ error: err.message });
        });
});

// Delete User 
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;

    if (!id) return res.status(404).send({ err: "Missing Data Parameter" });

    usersController.deleteUser(id)
        .then(user => {
        return res.status(200).send("User Deleted Successfully");
        })
        .catch(err => {
        return res.status(404).send({ error: err.message });
        });
});

// Update User
router.post('/update', (req, res) => {
    const { id, name, email } = req.body;

    usersController.updateUser(id, name)
        .then(user => {
        return res.status(200).send(user);
        })
        .catch(err => {
        return res.status(404).send({ error: err.message });
        });
});

module.exports = router
