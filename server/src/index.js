const app = require('./app');
const sequelize = require('./database/db');

// connecting to database 

function startConnection(){
    sequelize.authenticate().then(()=>{
        console.log("Database connected")
    }).catch((e) =>{
        console.log(e)
    });
}
// starting the server
function main(){
    try{
          startConnection();
         app.listen(app.get('port'));
    console.log('Server is running on port', app.get('port'));
    } catch (e) {
        console.log(e)
    }
    
}
main ();