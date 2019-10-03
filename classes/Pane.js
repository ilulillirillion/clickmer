import WrappedElement from '../classes/WrappedElement.js';
import HeaderTextSpan from '../classes/HeaderTextSpan.js';


export default class Pane extends WrappedElement {
  constructor() {
    super();

    this.element.classList.add('pane');

    console.debug(`<${this.uuid}> element set to <${this.element}>.`);

    this.header_span_contents = '';


    this.header_text_span_contents = '';
    this.header_span_contents = '';

    this.header_text_span = new HeaderTextSpan();
    this.element.appendChild(this.header_text_span.element);
    console.debug(`<${this.uuid}> header text span set to <${this.header_text_span}>.`);

    
  };

  tick(game_data) {
    super.tick();
    this.header_span_contents = this._header_span_contents;
    this.header_text_span.tick(this.header_span_contents);
  };

  get _header_span_contents() {
    return this.header_span_contents;
  };

  get tooltip_span_contents() {
    let text = '';
    return text;
  };
  
  // If there is a name, attach an underscore to it, otherwise leave it blank.
  get name_plus_underscore() {
    let name_plus_underscore = this.name;
    if (name) { name_plus_underscore = `${name}_` };
    return name_plus_underscore;
  };


  tickHeaderTextSpan() {
    let new_text_span_contents = this.header_text_span_contents;
    console.debug(`Updating <${this.uuid}> <${this.header_text_span.uuid}> header text span contents <${this.header_text_span.text_span_contents}> to <${new_text_span_contents}>`);
    //this.header_text_span.text_span_contents = this.header_text_span_contents;
    this.header_text_span.text_span_contents = new_text_span_contents;
    (`<${this.uuid}>'s <${this.header_text_span.uuid}> text span contents set to <${this.header_text_span.text_span_contents}>.`);
    this.header_text_span.tick();
  };
  
};
