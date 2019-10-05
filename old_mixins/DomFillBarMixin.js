import FillBar from '../classes/FillBar.js';


export const DomFillBarMixin = Base => class extends Base {
  //constructor() {};

  createFillBar() {
    let fillbar = new FillBar();
    return fillbar;
  };
};
