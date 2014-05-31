## Dominoes in PureScript

Let's try to build a non-trivial application: an HTTP API which you can use to play Dominoes.

### API

`POST /game` Creates a new game (or resets the state)

`GET /game` Returns the current state of the game

`POST /draw` Draw a tile from the boneyard, if you're blocked
Params:
- player: {1, 2}

`POST /place`
Params:
- player: String {1, 2}
- tile: String '00', '01' .. '66'
- side: String {left, right}

You play as both players (no AI). You should only be able to make valid moves.

