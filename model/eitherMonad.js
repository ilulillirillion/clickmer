// vim: set ft=javascript:


const either = ( monad, badFunction, goodFunction ) => {
  return (monad instanceof Good)
    ? goodFunction(monad._value)
    : badFunction(monad._value);
};

//liftA2(fn) {
const liftA2 = fn => {
  return function runApplicativeFunction(a, b) {
    return b.ap(a.map(fn));
  };
};

// Convenient bad alias.
const Bad = require('./Bad.js');
const bad = value => {
  return new Bad(value);
};

// Convenient good alias.
const Good = require('./Good.js');
const good = value => {
  return new Good(value);
};



module.exports = { either, bad, good };
//module.exports = either;
