const express = require('express');
    const api = express.Router();

    const salesController = require('../controllers/salesController');

    api.post('/create-sale', salesController.createSale);

    module.exports = api;