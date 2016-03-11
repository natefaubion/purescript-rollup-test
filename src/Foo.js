// module Foo

export var _foo = "FOO"

export function _bar(x) {
  return function (y) {
    return x + y
  }
}
