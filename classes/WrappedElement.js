import Thing from '../classes/Thing.js';
import TooltipSpan from '../classes/TooltipSpan.js';


export default class WrappedElement extends Thing {
  //static default_args = { 'name': 'element' };
  //constructor({ name = 'element' } = {}) {
  //constructor(master=null) {
  constructor(element_type='div') {
    super();
    console.debug(`Instantiating WrappedDomElement <${name}> (<${this.uuid}>).`);

    //this.master = master;

    // Element
    /*
    this.element = null;
    if (this.element) {
      this.element = element;
    };
    */

    // Tooltip
    if (this.element) {
      let tooltip = new TooltipSpan();
      this.tooltip = tooltip;
      this.element.classList.add('has_tooltip');
      console.debug(`<${this.uuid}> tooltip set to <${this.tooltip}>.`);
    };

    //this.element = this.createDomElement();
    //this.element = document.createElement('p');

    this.element = this.createDomElement(element_type);

  };

  createDomElement(element_type) {
    let element = document.createElement(element_type);
    element.setAttribute('id', this.uuid);
    element.classList.add('wrapped_element');
    console.debug(`Created DOM element <${element}> with id <${element.id}> and classes <${element.classList}>.`);
    return element;
  };

  //tick(overrides={}) {
  //tick() {
  //  console.debug(`Ticking <${this.uuid}>.`);
    //super.tick(overrides);
    /*
    if (this.element) {
      if (!this.tooltip) {
        let tooltip = new TooltipSpan();
        this.tooltip = tooltip;
        this.element.classList.add('has_tooltip');
        console.debug(`<${this.uuid}> tooltip set to <${this.tooltip}>.`);
      };
    };
    */
    //console.debug(`<${this.uuid
    //super(master);
    //this.propogateTickToSuper();
    //if (master) {
    //  this.master = this.adoptMaster();
    //};
  //};

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

  /*
  adoptMaster(master) {
    console.debug(`<${this.uuid}> adopting new master <${master.uuid}>.`);
    return master
  };
  */
};
