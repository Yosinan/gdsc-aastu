#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let j = 0;
    for (j; j < this.height; j++) {
      console.log('X'.repeat(this.width));
    }
  }
}
module.exports = Rectangle;
