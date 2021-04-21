const app = require('./app');

// starting the server

async function main(){

    app.listen(app.get('port'));
    console.log('Server is running on port', app.get('port'));
}
main ();