
    const express = require('express');
    const api = express.Router();

    const movieController = require('../controllers/movieController');
    const authentication = require('../midleware/autenticated');
    
    
    api.post('/add-movie', authentication.ensureAuth, movieController.addMovie);
    api.get('/get-movies', movieController.getMovies);
    api.get('/get-movie/:id', movieController.getMovieById);
    api.delete('/delete-movie/:id', authentication.ensureAuth, movieController.deleteMovie);
    api.put('/update-movie/:id', authentication.ensureAuth, movieController.updateMovie);
    
    
	

module.exports = api;