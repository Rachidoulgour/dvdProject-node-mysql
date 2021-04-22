const db = require('../database/db');


const User = db.models.users;


function signup(req, res) {
    console.log(User)
    console.log("REQ",req.body)
	// Save User to Database
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
        role:'USER'
	}).then(() => {
				return res.status(200).send({message:"User registered successfully!"});
        }).catch(err => {
		return res.status(500).send("Fail! Error -> " + err);
	})
}


module.exports = {
    signup
}