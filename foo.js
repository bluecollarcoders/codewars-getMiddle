var a = 1000;

function foo() {
  var a = 1001;
  function bar() {
    a++;
    var a = 1010;
    console.log(a);
  }
  bar();
}

console.log(foo());

const num1 = function (foo = 110, bar = 220) {
  return foo + bar;
};

// console.log(num1());

const num2 = ([foo, bar] = [110, 201]) => {
  foo + bar;
};

// console.log(num2());

var foo = new Promise((resovle, reject) => {
  reject(Error("Send Help SOS!"));
});

foo.catch((error) => console.log(error.message));
foo.catch((error) => console.log(error.message));

Promise.resolve("2001")
  .then(() => {
    throw Error("Help");
  })
  .catch((error) => {
    return "success";
  })
  .then((data) => {
    throw Error("Data failed");
  })
  .catch((error) => {
    console.log(error.message);
  });

(function immediateFoo(foo) {
  return (function immediateBar(bar) {
    console.log(foo);
  })(25);
})(40);

var foo = 101;

function func1() {
  return function () {
    console.log(foo);
  };
  var foo = 202;
}

var func2 = func1();

console.log(func2());

function findLowestStartingStair(jumps) {
  var steps = parseInt(input);

  for (var i = 0; i++ < steps; ) {
    var line = "";
    var spaces = steps - i;

    for (var j = spaces; j--; ) {
      line += " ";
    }

    for (var j = i; j--; ) {
      line += "#";
    }

    console.log(line);
  }
}
