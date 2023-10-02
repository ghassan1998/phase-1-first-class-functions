function receivesAFunction(callback) {
    // Do something with the callback function
    callback();
  }

  function returnsANamedFunction() {
    return function namedFunction() {
      
    };
  }
  function returnsAnAnonymousFunction() {
    return function() {
     
    };
  }