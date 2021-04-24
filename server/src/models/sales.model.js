module.exports = (sequelize, Sequelize) => {
	const Sale = sequelize.define('sales', {
	  movie_id: {
		  type: Sequelize.STRING
	  },
	  client_id: {
		  type: Sequelize.STRING
	  },
	  created_date: {
		  type: Sequelize.STRING
	  },
      is_returned: {
        type: Sequelize.BOOLEAN
    }
	  
	},{
		timestamps: false
	});
	
	return Sale;
}
