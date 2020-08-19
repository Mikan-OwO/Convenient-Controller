"use strict"

const fs = require("fs");

class Field {
  constructor() {
    this.tiles = [
    [1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1],
    ];
  }
  let x = this.tiles[0].length;
  let y = this.tiles.length;
if(x < 0 || x > 6 || y < 0 || y > 6) return 1;
}
