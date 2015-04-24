var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[3,2,1], [], []];
};

HanoiGame.prototype.isWon = function(){
  if(this.stacks[1].length === 3 || this.stacks[2].length === 3){
    return true;
  }else{
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx){
  if(this.stacks[startTowerIdx].length === 0){
    return false;
  } else if
    (this.stacks[startTowerIdx][this.stacks[startTowerIdx].length - 1] >
    this.stacks[endTowerIdx][this.stacks[endTowerIdx].length - 1]){
      return false;
  } else{
    return true;
  }
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    var toTower = this.stacks[endTowerIdx];
    var fromTower = this.stacks[startTowerIdx];
    toTower.push(fromTower.pop());
    return true;
  } else{
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback) {
  this.print();
  reader.question("From Stack? (0, 1, or 2)", function(startTowerIdx){
    var start = startTowerIdx;
    reader.question("To Stack? (0, 1, or 2)", function(endTowerIdx) {
      var finish = endTowerIdx;
      callback(start, finish);
    });
  });
};

HanoiGame.prototype.run = function (completionCallback) {
  var that = this;
  this.promptMove(function (start, finish) {
   if (that.move(start, finish)){
     if(that.isWon()){
       completionCallback();
     } else {
       that.run(completionCallback);
     }
   } else {
     console.log("Invalid Move");
     that.run(completionCallback);
   }
  });
};

game = new HanoiGame();

game.run(function () {
  console.log("You Won!");
  reader.close();
});
