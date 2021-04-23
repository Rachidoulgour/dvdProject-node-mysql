const express = require('express');
    const api = express.Router();

    const salesController = require('../controllers/salesController');

    api.post('/create-movie', salesController.createSale);