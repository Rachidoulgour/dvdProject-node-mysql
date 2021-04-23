module.exports = (sequelize, Sequelize) => {
	const Sale = sequelize.define('sales', {
	  movie_id: {
		  type: Sequelize.STRING
	  },
	  client_id: {
		  type: Sequelize.STRING
	  },
	  created_at: {
		  type: Sequelize.STRING
	  },
      is_returned: {
        type: Sequelize.BOOLEAN
    }
	  
	},{
		timestamps: true
	});
	
	return Sale;
}
