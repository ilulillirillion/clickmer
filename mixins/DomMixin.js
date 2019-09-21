export const DomMixin = Base => class extends Base {
  constructor() {
    super();
    console.debug('Executing DomMixin constructor.');

    this.dom = {};
  }

};
