
    const express = require('express');
    const api = express.Router();

    const userController = require('../controllers/userController');
    
    
    api.post('/signup', userController.signup);
    api.post('/signin', userController.signin);
    api.get('/users', userController.getUsers)
	

module.exports = api;