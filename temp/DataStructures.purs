module DataStructures where

import Data.String (charAt)
import Data.Array (map, length)

data PersonalInfo = PersonalInfo { name :: String, surname :: String, age :: Number }
data TileVal = T0 | T1 | T2 | T3 | T4 | T5 | T6
data Tile = Tile TileVal TileVal
data Board = Board [Tile]

data Query = Query {}
data Request = Request { query :: Query }
data Response = Response { end :: String  }
-- data Express req res = Req { | req } | Res { end :: forall a b. a -> b | res }

valFromString :: String -> TileVal
valFromString "0" = T0
valFromString "1" = T1
valFromString "2" = T2
valFromString "3" = T3
valFromString "4" = T4
valFromString "5" = T5
valFromString "6" = T6

-- create tile from string
tileFromString :: String -> Tile
tileFromString s = Tile (valFromString (charAt 0 s)) (valFromString (charAt 1 s))

board :: [String] -> [Tile]
board tiles = map tileFromString tiles

boardLength :: Board -> Number
boardLength (Board b) = length b
