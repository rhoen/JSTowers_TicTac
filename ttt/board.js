function Board () {
  this.grid = [["_", "_", "_"],["_", "_", "_"],["_", "_", "_"]];
};

Board.prototype.render = function () {
  for (var i = 0; i < this.grid.length; i++){
    console.log(this.grid[i]);
  }
};

Board.prototype.empty = function (pos) {
  var row = pos[0];
  var col = pos[1];
  return this.grid[row][col] === "_";
}

Board.prototype.full = function () {
  var full = true;
  for (var i = 0; i < this.grid.length; i++) {
    for (var j = 0; j < this.grid[0].length; j++) {
      if (this.grid[i][j] === "_") {
        full = false;
      }
    }
  }

  return full;
}

Board.prototype.won = function () {
  if (this.checkRows() || this.checkColumns() || this.checkDiag()) {
    return true;
  } else {
    return false;
  }
}

Board.prototype.placeMark = function (pos, mark) {
  var row = pos[0];
  var col = pos[1];
  this.grid[row][col] = mark;
}

Board.prototype.checkRows = function () {
  var won = false
  for (var i = 0; i < this.grid.length; i++) {
    var row = this.grid[i] + ""
    if (row === "x,x,x" || row === "o,o,o"){
      won = true;
    }
  }

  return won;
};

Board.prototype.checkColumns = function () {
  var won = false;
  for (var i = 0; i < this.grid[0].length; i++){
    var col = [this.grid[0][i], this.grid[1][i], this.grid[2][i]] + "";
    if (col === "x,x,x" || col === "o,o,o"){
      won = true;
    }
  }

  return won;
};

Board.prototype.checkDiag = function () {
  var won = false;
  var diag1 = [this.grid[0][0], this.grid[1][1], this.grid[2][2]] + "";
  var diag2 = [this.grid[0][2], this.grid[1][1], this.grid[2][0]] + "";
  if (diag1 === "x,x,x" || diag1 === "o,o,o") {
    won = true;
  } else  if (diag2 === "x,x,x" || diag2 === "o,o,o") {
    won = true;
  }
  return won;
}

grid = new Board()
console.log(grid.full());


module.exports = Board;
