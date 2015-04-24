function Clock () {
  this.currentTime = new Date();
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  var seconds = this.currentTime.getSeconds();
  var minutes = this.currentTime.getMinutes();
  var hours = this.currentTime.getHours();
  console.log(hours + ":" + minutes + ":" + seconds);
};

Clock.prototype.run = function () {
  this.printTime();
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  this.currentTime = new Date(this.currentTime.getTime() + Clock.TICK);
  this.printTime();
};

var clock = new Clock();
clock.run();

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    completionCallback(sum);
  } else {
    reader.question("Enter a number: ", function(numString){
      var num = parseInt(numString);
      var newSum = sum + num;
      numsLeft--;
      console.log(newSum + " is the current sum");
      addNumbers(newSum, numsLeft, completionCallback);
    });
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});

function askIfGreaterThan(el1, el2, callback){
  reader.question("Is " + el1 + " greater than " + el2 + "?",function(answer){
    if (answer === "yes"){
      callback(true);
    }else{
      callback(false);
    }
  });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if(i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
      if(isGreaterThan){
        var store = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = store;
        madeAnySwaps = true
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }else{
    outerBubbleSortLoop(madeAnySwaps);
  }


};


function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };
  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
