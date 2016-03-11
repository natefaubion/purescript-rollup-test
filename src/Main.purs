module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, print)

import Foo (bar)

main :: Eff (console :: CONSOLE) Unit
main = print $ bar 10
