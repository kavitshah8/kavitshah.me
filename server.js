var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

//Middlewares
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

//Router
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log(`Prodution Express server running at localhost: ${PORT}`);
});
