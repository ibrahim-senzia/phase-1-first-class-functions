
//callback function
function receivesAFunction(callback) {
    callback();
  }

  //returnsANamedFunction()
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Hello, I'm a named function!");
    }
    return namedFunction;
  }

  //returns AnAnonymousFunction()
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello, I'm an anonymous function!");
    };
  }