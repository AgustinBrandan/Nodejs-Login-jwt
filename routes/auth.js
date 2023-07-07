const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/', authController.getUsers);
router.delete('/:id', authController.deleteUser);

module.exports = router;
