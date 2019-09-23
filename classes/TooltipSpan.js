import WrappedTextSpan from '../classes/WrappedTextSpan.js';


export default class TooltipSpan extends WrappedTextSpan {
  constructor() {
    console.debug('Constructing a new TooltipSpan.');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.element = this.createDomElement();
    console.debug(`<${this.uuid}> element set to <${this.element}>.`);

    console.debug(`Finished constructing <${this}>.`);
  };

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();
  };

  createDomElement() {
    let span = document.createElement('span');
    span.setAttribute('id', this.uuid);
    span.classList.add('tooltip_text');
    span.innerHTML = 'tooltip text';
    console.debug(`Created span <${span}>.`);
    return span;
  };

};
