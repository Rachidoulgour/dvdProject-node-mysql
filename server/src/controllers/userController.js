const db = require('../database/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = db.models.users;


function signup(req, res) {
    
	// Save User to Database
	User.create({
		username: req.body.username,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
        role:'USER'
	}).then(() => {
				return res.status(200).send({message:"User registered successfully!"});
        }).catch(err => {
		return res.status(500).send("Fail! Error -> " + err);
	})
}

//Login
signin = (req, res) => {	
	
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send('User Not Found.');
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		
		const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET || "Tokenimage", {
		  expiresIn: 86400 // expires in 24 hours
		});
		user.password = undefined;
		res.json({user:user, token:token});
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
}


module.exports = {
    signup,
	signin
}