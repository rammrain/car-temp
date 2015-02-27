var express = require('express'),
    router  = express.Router(),
    fs      = require('fs'),
    moment  = require('moment');

/* GET home page. */
router.get('/', function (req, res) {
    res.send(fs.readFileSync('./views/index.html', {
        encoding: 'utf8'
    }));
});

/* GET temperature */
router.get('/temp', function(req, res) {
    res.json(getTemp());
});

/* POST temperature */
router.post('/temp', function(req, res) {
    console.log(req.body);

    saveTemp(req.body.temp, req.body.time);

    res.json({
        success: true
    });
});

module.exports = router;

function saveTemp(temp, time)
{
    fs.writeFile(getFileName(), JSON.stringify({
        temp: temp,
        time: time
    }), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function getTemp()
{
    var data = JSON.parse(fs.readFileSync(getFileName()));

    return {
        temp: data.temp,
        date: moment(data.time, 'X').format('HH:mm:ss DD.MM.YYYY')
    };
}

function getFileName()
{
    return __dirname + '/../data/temp';
}
