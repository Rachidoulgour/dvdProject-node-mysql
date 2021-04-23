const db = require('../database/db');


const Movie = db.models.movies;

// Add movie
function addMovie(req, res) {
    
	Movie.create({
		name: req.body.name,
		price: req.body.price,
		genre: req.body.genre,
	}).then(() => {
				return res.status(200).send({message:"Movie added successfully!"});
        }).catch(err => {
		return res.status(500).send("Fail! Error -> " + err);
	})
}

//Get All Movies
getMovies = async (req,res)=>{
	console.log(req.params)
	const movies = await Movie.findAll();
	
	return res.status(200).send({movies: movies});
}


module.exports = {
    addMovie,
    getMovies
}