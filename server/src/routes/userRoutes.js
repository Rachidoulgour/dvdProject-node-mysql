
    const express = require('express');
    const api = express.Router();

    const userController = require('../controllers/userController');
    const authentication = require('../midleware/autenticated');
    
    
    api.post('/signup', userController.signup);
    api.post('/signin', userController.signin);
    api.get('/users', authentication.ensureAuth, userController.getUsers)
	

module.exports = api;