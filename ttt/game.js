var Board = require('ttt/board.js')
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function Game (reader) {
  this.reader = reader;
  this.turn = "player1";
  this.board = new Board();
  //game stuff
};

Game.prototype.toggleTurn = function  () {
  if (this.turn === "player1") {
    this.turn = "player2";
  } else {
    this.turn = "player1";
  }
}

Game.prototype.promptPlayer = function (callback) {
  reader.question(this.turn + " enter position: ", function(pos) {
    var row = parseInt(pos[0]);
    var col = parseInt(pos[1]);
    callback([row,col]);
  })
}

Game.prototype.run = function (completionCallback) {
  this.board.render();
  promptPlayer(function () {

  })
}

new Game(reader)
