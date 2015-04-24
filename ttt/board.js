function Board () {
  this.board = [["x", "_", "_"],["x", "_", "_"],["x", "_", "_"]];
};

Board.prototype.render = function () {
  for (var i = 0; i < this.board.length; i++){
    console.log(this.board[i]);
  }
};

Board.prototype.won = function () {
  if (this.checkRows() || this.checkColumns() || this.checkDiag()) {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkRows = function () {
  var won = false
  for (var i = 0; i < this.board.length; i++) {
    var row = this.board[i] + ""
    if (row === "x,x,x" || row === "o,o,o"){
      won = true;
    }
  }

  return won;
};

Board.prototype.checkColumns = function () {
  var won = false;
  for (var i = 0; i < this.board[0].length; i++){
    var col = [this.board[0][i], this.board[1][i], this.board[2][i]] + "";
    if (col === "x,x,x" || col === "o,o,o"){
      won = true;
    }
  }

  return won;
};

Board.prototype.checkDiag = function () {
  var won = false;
  var diag1 = [this.board[0][0], this.board[1][1], this.board[2][2]] + "";
  var diag2 = [this.board[0][2], this.board[1][1], this.board[2][0]] + "";
  if (diag1 === "x,x,x" || diag1 === "o,o,o") {
    won = true;
  } else  if (diag2 === "x,x,x" || diag2 === "o,o,o") {
    won = true;
  }
  return won;
}


module.exports = Board;
