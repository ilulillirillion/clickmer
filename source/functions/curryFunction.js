// vim: set ft=javascript:


// Modified from the tutorial at https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe


let curryFunction = function(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  
  // Return a function which contains the original function plus the
  // pre-defined arguments.
  return function() {
    return fn.apply(this, args.concat(
        Array.prototype.slice.call(arguments, 0)
    ));
  };
};


module.exports = curryFunction;
