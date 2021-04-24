const express = require('express');
    const api = express.Router();

    const salesController = require('../controllers/salesController');
    const authentication = require('../midleware/autenticated');

    api.post('/create-sale', authentication.ensureAuth, salesController.createSale);
    api.get('/sales', authentication.ensureAuth, salesController.getSales);
    api.put('/return-sale/:id', authentication.ensureAuth, salesController.updateSaleToReturned);

    module.exports = api;