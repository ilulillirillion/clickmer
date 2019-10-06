export const PopulantMixin = Base => class extends Base {
  constructor() {
    super();

    this.write(`${this.name} has joined the colony!`);
  };
};
