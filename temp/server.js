var express = require('express');
var app = express();

app.post('/game', function(req, res) {
    var boneyard = ['00',
                    '01', '11',
                    '02', '12', '22',
                    '03', '13', '23', '33',
                    '04', '14', '24', '34', '44',
                    '05', '15', '25', '35', '45', '55',
                    '06', '16', '26', '36', '46', '56', '66'];

    var p0 = { tiles: boneyard.splice(0, 7) };
    var p1 = { tiles: boneyard.splice(0, 7) };
    var players = [p0, p1];

    res.json({
        players: players,
        boneyard: boneyard
    });
})

app.listen(8080);
