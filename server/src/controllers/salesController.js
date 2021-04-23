const db = require('../database/db');



const Sale = db.models.sales;

//Create a sale
function createSale(req, res) {
    
	// Save Sale to Database
	Sale.create({
		movie_id: req.body.movie_id,
		user_id: req.body.user_id,
		created_at: "",
        is_returned:false
	}).then(() => {
				return res.status(200).send({message:"Sale created successfully!"});
        }).catch(err => {
		return res.status(500).send("Fail! Error -> " + err);
	})
}


module.exports = {
    createSale
}