export const DomMixin = Base => class extends Base {
  constructor() {
    super();
    console.debug('Executing DomMixin constructor.');
    this.element_id = this.uuid;
    this.element_root = this.createElementRoot();
  }

  createElementRoot() {
    return null
  };
};
