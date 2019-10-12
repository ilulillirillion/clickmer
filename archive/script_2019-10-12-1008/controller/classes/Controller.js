export default class Controller {
  constructor({ model = null, view = null });

    this.model = model;
    if (!this.model) {
      this.model = new Model();
    };

    this.view = view;
    if (!this.view) {
      this.view = new View();
    };

};
