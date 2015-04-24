Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context);
  };
};

var times = function (num, callback) {
  for (var i = 0; i < num; i++) {
    callback();
  }
};

var Cat = function (name, age) {
  this.name = name;
  this.age = age;
};

Cat.prototype.sayHi = function () {
  console.log("my name is " + this.name);
}

var cat = new Cat("Sennacy", 7);

times(3, cat.sayHi); //=> :(
times(3, cat.sayHi.myBind(cat)); //=> :)
