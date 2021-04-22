module.exports = (sequelize, Sequelize) => {
	const Movie = sequelize.define('movies', {
		
	  name: {
		  type: Sequelize.STRING
	  },
	  price: {
		  type: Sequelize.STRING
	  },
	  genre: {
		  type: Sequelize.STRING
	  }
	  
	},{
		timestamps: false
	});
	
	return Movie;
}