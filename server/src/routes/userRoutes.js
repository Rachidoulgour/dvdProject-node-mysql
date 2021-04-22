module.exports = function(app) {
    const express = require('express');
    const api = express.Router();

    const userController = require('../controllers/userController');
    
    
    // app.get('/', usercontroller.home);
    api.post('/signup', userController.signup);
    
	
}