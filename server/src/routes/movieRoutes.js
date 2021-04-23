
    const express = require('express');
    const api = express.Router();

    const movieController = require('../controllers/movieController');
    
    
    api.post('/add-movie', movieController.addMovie);
    api.get('/get-movies', movieController.getMovies);
    
    
	

module.exports = api;