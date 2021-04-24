
const express = require('express');
const cors = require('cors');

const app = express();

//Import routes
const user_routes = require('./routes/userRoutes');
const movie_routes = require('./routes/movieRoutes');
const sale_routes = require('./routes/saleRoutes');

//Set port
app.set('port', process.env.PORT || 5050);

app.use(express.json());

//CORS
app.use(cors());

// Routes
app.use('/api', user_routes);
app.use('/api', movie_routes);
app.use('/api', sale_routes);


module.exports = app;