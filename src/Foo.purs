module Foo (foo, bar) where

import Prelude

foreign import _foo :: String

foreign import _bar :: Int -> Int -> Int

foo :: String
foo = _foo <> "foo"

bar :: Int -> Int
bar = _bar 42
