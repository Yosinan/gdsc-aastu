#!/usr/bin/node
// a class Square that defines a square and inherits from Square of 5-square.js

const square = require('./5-square.js');
class Square extends square {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    let j = 0;
    for (j; j < this.height; j++) {
      console.log(c.repeat(this.width));
    }
  }
}
module.exports = Square;
