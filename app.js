var express      = require('express'),
    path         = require('path'),
    bodyParser   = require('body-parser'),
    routes       = require('./routes/index'),
    app          = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
