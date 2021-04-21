
const express = require('express');


const app = express();


app.set('port', process.env.PORT || 5050);

app.use(express.json());




module.exports = app;