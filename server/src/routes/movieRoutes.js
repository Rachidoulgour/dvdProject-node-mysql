
    const express = require('express');
    const api = express.Router();

    const movieController = require('../controllers/movieController');
    
    
    api.post('/add-movie', movieController.addMovie);
    api.get('/get-movies', movieController.getMovies);
    api.get('/get-movie/:id', movieController.getMovieById);
    api.delete('/delete-movie/:id', movieController.deleteMovie);
    api.put('/update-movie/:id', movieController.updateMovie);
    
    
	

module.exports = api;