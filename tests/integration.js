var r = require('request');
var Promise = require('bluebird');
var assert = require('assert');
var _ = require('underscore');

var r = Promise.promisifyAll(r);

// helpers

function logErr(err) {
    console.error(err);
}

function parseGame(res) {
    var body = res[1];
    return JSON.parse(body);
}

// Game creation

describe('Created game', function() {
    var gameState;

    before(function(done) {
        r.postAsync('http://localhost:8080/game')
        .then(parseGame)
        .then(function(state) {
            gameState = state;
            done();
        })
    })

    it('should have two players', function() {
        assert.strictEqual(gameState.players.length, 2);
    })

    it('should have a total of 24 valid tiles', function() {
        var validTiles = ['00',
                          '01', '11',
                          '02', '12', '22',
                          '03', '13', '23', '33',
                          '04', '14', '24', '34', '44',
                          '05', '15', '25', '35', '45', '55',
                          '06', '16', '26', '36', '46', '56', '66'];


        var allTiles = gameState.boneyard
                       .concat(gameState.players[0].tiles)
                       .concat(gameState.players[1].tiles);
        
        var sortedTiles = _.sortBy(allTiles, function(t) {
            return t;
        })
        var sortedValidTiles = _.sortBy(validTiles, function(t) {
            return t;
        })

        assert.deepEqual(sortedTiles, sortedValidTiles);
    })
})
