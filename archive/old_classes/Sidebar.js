import Pane from '../classes/Pane.js';


export default class Sidebar extends Pane {
  constructor() {
    super();
    this.element.classList.add('sidebar');
  };
};
