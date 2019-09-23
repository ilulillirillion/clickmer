import Thing from '../classes/Thing.js';
//import TooltipSpan from '../classes/TooltipSpan.js';


export default class WrappedElement extends Thing {
  //static default_args = { 'name': 'element' };
  //constructor({ name = 'element' } = {}) {
  //constructor(master=null) {
  constructor(element=null) {
    super();
    console.debug(`Instantiating WrappedDomElement <${name}> (<${this.uuid}>).`);

    //this.master = master;

    // Element
    this.element = null;
    if (element) {
      this.element = element;
    };

    // Tooltip
    if (this.element) {
      let tooltip = new TooltipSpan();
      this.tooltip = tooltip;
      this.element.classList.add('has_tooltip');
      console.debug(`<${this.uuid}> tooltip set to <${this.tooltip}>.`);
    };

    //this.element = this.createDomElement();
    //this.element = document.createElement('p');

  };

  tick(master=null) {
    console.debug(`Ticking <${this.uuid}>.`);
    //console.debug(`<${this.uuid
    //super(master);
    this.propogateTickToSuper();
    if (master) {
      this.master = this.adoptMaster();
    };
  };

  /*
  createDomElement() {
    let element = this._createDomElement();
    let tooltip = this.createTooltip();
  };
  */

  /*
  createDomElement() {
    console.warn(`Triggered WrappedDomElement <${this.uuid}> createDomElement function. Normally, a subclass method should be overriding this.`);
    return null;
  };
  */

  /*
  createTooltipElement() {
    console.debug(`<${this.uuid}> creating new tooltip element.`);
    let tooltip = 
  */

  adoptMaster(master) {
    console.debug(`<${this.uuid}> adopting new master <${master.uuid}>.`);
    return master
  };
};
