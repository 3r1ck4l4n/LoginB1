const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/form', userController.form);
router.post('/register', userController.register);
router.post('/validate', userController.validate);
router.get('/forget', userController.forgetPass);
router.post('/recover', userController.recoverPass);
router.get('/home', userController.home);
module.exports = router;