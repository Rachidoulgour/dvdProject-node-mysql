
const express = require('express');


const app = express();

const user_routes = require('./routes/userRoutes');

app.set('port', process.env.PORT || 5050);

app.use(express.json());


// Routes
app.use('/api', user_routes);


module.exports = app;