const db = require('../database/db');


const Movie = db.models.movies;

// Add movie
function addMovie(req, res) {

    Movie.create({
        name: req.body.name,
        price: req.body.price,
        genre: req.body.genre,
    }).then(() => {
        return res.status(200).send({
            message: "Movie added successfully!"
        });
    }).catch(err => {
        return res.status(500).send("Fail! Error -> " + err);
    })
}

//Get All Movies
getMovies = async (req, res) => {

    const movies = await Movie.findAll();
    if (!movies) {
        return res.status(404).send({
            message: "Movies not found"
        });
    } else {
        return res.status(200).send({
            movies: movies
        });
    }
}

//Get a movie by Id
getMovieById = async (req, res) => {

    const movie = await Movie.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!movie) {
        return res.status(404).send({
            message: "Movie not found"
        });
    } else {
        return res.status(200).send({
            movie
        });
    }

}

// Delete movie
deleteMovie = async (req,res)=>{
	const movie = await Movie.destroy({
		where:{
			id:req.params.id
		}
	})
		if(!movie){
			return res.status(404).send({message:'Movie Not Found.'});
		}
		res.status(200).send({message:"Deleted"});
	
		// res.status(500).send('Error -> ' + err);
	
}

// Update movie
updateMovie = async (req,res)=>{
    
    const movieUpdate = req.body
    
	const movie = await Movie.findOne({
		where:{
			id:req.params.id
		}
	})
		if(!movie){
            
			return res.status(404).send({message:'Movie Not Found.'});
		}else{
            Movie.update(movieUpdate,{where:{
                id:req.params.id
            }})
            res.status(200).send({message:"Movie updated"});
        }
        
	
}

module.exports = {
    addMovie,
    getMovies,
    getMovieById,
    deleteMovie,
    updateMovie
}