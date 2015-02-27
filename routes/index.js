var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Engine Temperature'
    });
});

/* GET temperature */
router.get('/temp', function(req, res) {
    res.json(getTemp());
});

/* POST temperature */
router.post('/temp', function(req, res) {
    saveTemp(req.body.temp, req.body.time);

    res.json({
        success: true
    });
});

module.exports = router;

function saveTemp(temp, time)
{
    console.log({
        temp: temp,
        time: time
    });
}

function getTemp()
{
    return {
        temp: 33,
        time: 1425036181
    };
}
