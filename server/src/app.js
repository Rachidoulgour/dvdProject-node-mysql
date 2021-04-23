
const express = require('express');


const app = express();

//Import routes
const user_routes = require('./routes/userRoutes');
const movie_routes = require('./routes/movieRoutes');

//Set port
app.set('port', process.env.PORT || 5050);

app.use(express.json());


// Routes
app.use('/api', user_routes);
app.use('/api', movie_routes);


module.exports = app;