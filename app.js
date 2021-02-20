var express = require('express');
var app = express()

// Setting up template engine (ejs)
app.set ('view engine', 'ejs');

// Static file
app.use(express.static('./public'));

// Listen to port
app.listen(3000, () => {
    console.log('Listening to port 3000')
});