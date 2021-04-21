const app = require('./app');
const sequelize = require('./database/db');

// starting the server

function startConnection(){
    sequelize.authenticate().then(()=>{
        console.log("Database connected")
    });
}

async function main(){
    startConnection();
    app.listen(app.get('port'));
    console.log('Server is running on port', app.get('port'));
}
main ();