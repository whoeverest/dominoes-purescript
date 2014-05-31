module Controllers where

import DataStructures
import Data.Array
import Data.String (split)

index :: PersonalInfo -> String
index (PersonalInfo person) = if person.age == 10
                              then "Hello"
                              else "Hi!"
