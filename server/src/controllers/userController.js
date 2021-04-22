const db = require('../database/db');


const User = db.user;

function signup(req, res) {
    console.log("REQ",req)
	// Save User to Database
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	}).then(() => {
				return res.status(200).send({message:"User registered successfully!"});
        }).catch(err => {
		return res.status(500).send("Fail! Error -> " + err);
	})
}


module.exports = {
    signup
}