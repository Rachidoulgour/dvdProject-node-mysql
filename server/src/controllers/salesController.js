const db = require('../database/db');
const moment = require('moment');



const Sale = db.models.sales;
const User = db.models.users;
const Movie = db.models.movies;

//Create a sale
function createSale(req, res) {
    console.log(req.body)

    // Save Sale to Database
    Sale.create({

        movie_id: Number(req.body.params.movie_id),
        client_id: Number(req.body.params.user_id),
        created_date: moment().unix(),
        is_returned: false
    }).then(() => {
        return res.status(200).send({
            message: "Sale created successfully!"
        });
    }).catch(err => {
        return res.status(500).send("Fail! Error -> " + err);
    })
}

// Get all sales
getSales = async (req, res) => {

    const sales = await db.query("SELECT * From sales, movies, users where sales.movie_id = movies.id and sales.client_id = users.id", {
        type: db.QueryTypes.SELECT
    });
    if (!sales) {
        return res.status(404).send({
            message: "Sales not found"
        });
    } else {
        res.status(200).send({
            sales
        });
    }
}


//Getting clients
getClients = async (req, res) => {

    const clients = await db.query("SELECT * From users, sales where sales.client_id = users.id", {
        type: db.QueryTypes.SELECT
    });
    if (!clients) {
        return res.status(404).send({
            message: "Sales not found"
        });
    } else {
        res.status(200).send({
            clients
        });
    }
}

//Get purchases by user's id
getPurchasesById = async (req, res) => {

    let userid = req.params.id
    const purchases = await db.query(`SELECT * From sales, movies where sales.client_id = ${userid} and sales.movie_id=movies.id`, {
        type: db.QueryTypes.SELECT
    });
    if (!purchases) {
        return res.status(404).send({
            message: "Sales not found"
        });
    } else {
        res.status(200).send({
            purchases
        });
    }
}

//Return the movie
updateSaleToReturned = async (req, res) => {



    const sale = await Sale.findOne({
        where: {
            id: req.params.id
        }
    })
    if (!sale) {

        return res.status(404).send({
            message: 'Sale Not Found.'
        });
    } else {
        Sale.update({
            is_returned: true
        }, {
            where: {
                id: req.params.id
            }
        })
        return res.status(200).send({
            sale,
            message: "Movie updated"
        });
    }


}

module.exports = {
    createSale,
    getSales,
    updateSaleToReturned,
    getClients,
    getPurchasesById
}