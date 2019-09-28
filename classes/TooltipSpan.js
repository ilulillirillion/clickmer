import DynamicWrappedTextSpan from '../classes/DynamicWrappedTextSpan.js';


export default class TooltipSpan extends DynamicWrappedTextSpan {
  constructor() {
    console.debug('Constructing a new TooltipSpan.');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.span_contents = 'tooltip text';

    this.element = this.createDomElement();
    console.debug(`<${this.uuid}> element set to <${this.element}>.`);

    console.debug(`Finished constructing <${this}>.`);
  };


  tick(text = this.span_contents) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with text <${text}>.`);
    super.tick(text);
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
