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
  this.mark = 'x';
  //game stuff
};

Game.prototype.toggleTurn = function  () {
  if (this.turn === "player1") {
    this.turn = "player2";
    this.mark = 'o';
  } else {
    this.turn = "player1";
    this.mark = 'x';
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
  promptPlayer(function (pos) {
    if (this.board.empty(pos)) {
      this.board.placeMark(pos, this.mark())
      if (this.board.won) {
        console.log(this.turn + " wins!")
        completionCallback();
      } else if (this.board.full) {
        console.log("Tie game")
        completionCallback();
      } else {
        this.run(completionCallback);
      }
    } else {
      console.log('invalid move');
      this.run(completionCallback);
    }

  }.bind(this))
}

new Game(reader)
