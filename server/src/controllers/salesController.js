const db = require('../database/db');
const moment = require('moment');



const Sale = db.models.sales;

//Create a sale
function createSale(req, res) {
    console.log(db.models)
	// Save Sale to Database
	Sale.create({
		movie_id: req.body.movie_id,
		client_id: req.body.user_id,
		created_date: moment().unix(),
        is_returned:false
	}).then(() => {
				return res.status(200).send({message:"Sale created successfully!"});
        }).catch(err => {
		return res.status(500).send("Fail! Error -> " + err);
	})
}

// Get all sales
getSales = async (req, res) => {

    const sales = await Sale.findAll();
    if (!sales) {
        return res.status(404).send({
            message: "Movies not found"
        });
    } else {
        return res.status(200).send({
            sales
        });
    }
}


module.exports = {
    createSale,
    getSales
}