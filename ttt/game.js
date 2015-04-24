var Board = require('ttt/board.js')
var readerFunc = function () {
  var readline = require('readline');
  var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game (reader) {
  reader();
};
