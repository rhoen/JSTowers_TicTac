var Board = require('ttt/board.js')

function Game (readerThing) {
  this.readline = require('readline');
  this.reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  };
  this.turn = "player1";

  //game stuff
};

Game.prototype.toggleTurn = function  () {
  if (this.turn === "player1") {
    this.turn = "player2";
  } else {
    this.turn = "player1";
  }
}

Game.prototype.input = function () {
  reader.question(ljksfdkljfdsjlksfdjlkfds)
}

Game.prototype.run = function (completionCallback) {

}
