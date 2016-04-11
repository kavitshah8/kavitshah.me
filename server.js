var express = require('express');
var path = require('path');
var compression = require('compression');
var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');

var app = express();

//Middlewares

    app.use(compression());
    app.use(express.static(path.join(__dirname, 'public')));

    // request is in raw text format. bodyParser converts the raw text in JSON format, which is available on req.body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

//Router

    app.get(`*`, (req, res) => {
        res.sendFile(path.join(__dirname, `public`, `index.html`));
    });

    app.post(`/api/inputPassword`, (req, res) => {
        var SALT_WORK_FACTOR = req.body.SALT_WORK_FACTOR || 12;
        var inputPassword = req.body.inputPassword;
        var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
        var hash = bcrypt.hashSync(inputPassword, salt);
        res.status(200).json({
            hash: hash
        });
    });

    app.post(`/api/hashedPassword`, (req, res) => {
        var inputPassword = req.body.inputPassword;
        var hashedPassword = req.body.hashedPassword;
        var verified = bcrypt.compareSync(inputPassword, hashedPassword);
        res.status(200).json({
            verified: verified
        });
    });

// Start the server

    var PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Prodution Express server running at localhost: ${PORT}`);
    });
