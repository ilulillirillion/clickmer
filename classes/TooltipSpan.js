import WrappedTextSpan from '../classes/WrappedTextSpan.js';


export default class TooltipSpan extends WrappedTextSpan {
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
    super.tick(text);
    //super.tick('testtest');
  };

  /*
  //TODO: restore this functionality;
  tick(overrides={}) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick(overrides);
    this.element.innerHTML = this.span_contents;
    //this.text_contents = this.text_contents;
    //this.element.innerHTML = this.tooltip_text_contents;
  */
    /*
    for (listener of this.tick_listeners) {
      console.debug(`<${this.uuid}> invoking tick listener <${listener}>.`);
      listener();
    };
    */
  //};

  createDomElement() {
    let span = document.createElement('span');
    span.setAttribute('id', this.uuid);
    span.classList.add('tooltip_text');
    span.innerHTML = 'tooltip text';
    console.debug(`Created span <${span}>.`);
    return span;
  };

};
