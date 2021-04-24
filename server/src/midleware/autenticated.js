const jwt = require('jsonwebtoken')
const moment = require('moment');


exports.ensureAuth = function(req, res, next){
    console.log(req.headers)
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'Petition without headers'
        })
    }
    
    var token = req.headers.authorization.replace(/['"]+/g, '');
    
    const secretWords= "This_Project_Is_Made_With_Love" // In a real project you'll need to use environnement variable for more seecurity
    try{    
        var payload = jwt.decode(token, secretWords);       
        if(payload.exp<=moment().unix()){
            return res.status(401).send({message: 'Expired token'})

        }
    }catch(ex){
        console.log(ex)
        return res.status(404).send({message: 'token is not valid'})
        
    }
    req.user = payload;
    next();
}