import Thing from '../classes/Thing.js';


export default class WrappedElement extends Thing {
  constructor(element_type='div') {
    super();
    console.debug(`Instantiating WrappedDomElement <${name}> (<${this.uuid}>).`);


    // Tooltip
    if (this.element) {
      let tooltip = new TooltipSpan();
      this.tooltip = tooltip;
      this.element.classList.add('has_tooltip');
      console.debug(`<${this.uuid}> tooltip set to <${this.tooltip}>.`);
    };

    this.element = this.createDomElement(element_type);

  };

  createDomElement(element_type) {
    let element = document.createElement(element_type);
    element.setAttribute('id', this.uuid);
    element.classList.add('wrapped_element');
    console.debug(`Created DOM element <${element}> with id <${element.id}> and classes <${element.classList}>.`);
    return element;
  };

  tick() {
    super.tick();
  };

};
