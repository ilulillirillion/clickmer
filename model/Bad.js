// vim: set ft=javascript:


class Bad {
  
  constructor(value) {
    this._value = value;
  };

  map() { return this };

  join() { return this };

  chain() { return this };

  ap() { return this };
  
  unwrap() {
    console.error(this._value);
    return null;
  };

  toString() {
    const string = this._value.toString();
    return `Bad(${string})`;
  };

};


module.exports = Bad;
