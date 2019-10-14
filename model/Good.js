// vim: set ft=javascript:


class Good {
  
  constructor(value) {
    this._value = value;
  };

  //map() { return this };
  //map() { return this._value };
  map(fn) {
    return new Good(
        fn(this._value)
    );
  };

  join() {
    if ((this._value instanceof Bad)
        || (this._value instanceof Good)) {
      return this._value;
    };
    return this;
  };

  chain(fn) {
    return fn(this_value);
  };

  ap(other_either) {
    const functionToRun = other_either.value;
    return this.map(functionToRun);
  };

  unwrap() {
    return this._value;
  };

  toString() {
    const string = this._value.toString();
    return `Good(${string})`;
  };

};


module.exports = Good;
