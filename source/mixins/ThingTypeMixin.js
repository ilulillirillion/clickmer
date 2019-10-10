const ThingTypeMixin = Base => class extends Base {
  constructor({ thing_type = 'thing' } =
              { thing_type: 'thing' }) {
    super();
    this.thing_type = thing_type;
  };
};

module.exports = ThingTypeMixin;
