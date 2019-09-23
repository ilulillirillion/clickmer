import WrappedElement from '../classes/WrappedElement.js';


export default class TextSpan extends WrappedElement {
  constructor(master=null) {
    console.debug('Instantiating a new TextSpan.');
    super(master);
    console.debug(`Instantiating a new <${this.class_name}> <${this.uuid}>.`);

    //this.text_span_contents = 'text span';
    this.text_span_contents = '';
    console.debug(`<${this.uuid}> text span contents set to <${this.text_span_contents}>.`);

    this.element = this.createDomElement();

  };

  get effective_text_contents() {
    console.warn(this.uuid);
    console.warn(this.master);
    console.warn(this.text_span_contents);
    //let text = this.header_text;
    let text = this.text_span_contents;
    if (this.master && this.master.text_span_contents) {
      console.debug(`Overriding <${this.uuid}> text span contents <${this.text_span_contents}> with <${this.master.uuid}> text span contents <${this.master.text_span_contents}>.`);
      text = this.master.text_span_contents;
    };
    //return this.master.header_text || this.header_text;
    console.debug(`Returning effective text contents: <${text}>.`);
    return text;
  };

  tick(master=null, text_span_contents = this.text_span_contents) {
    console.debug(`Ticking TextSpan <${this.uuid}> with text span contents <${text_span_contents}>.`);
    //this.propogateTickToSuper(master);
    super.tick();
    //this.element.innerHTML = this.effective_text;
    //console.debug(`Set <${this.uuid}> innerHTML to <${this.element.innerHTML}>.`)
    //this.element.innerHTML = this.text_span_contents;
    this.element.innerHTML = text_span_contents;
    console.debug(`Set <${this.uuid}> innerHTML to <${this.element.innerHTML}>.`)
  };

  //createDomElement({ element_id = this.uuid, text = this.text }) {
  createDomElement(element_id = this.uuid, text = this.effective_text_contents) {
    let element = document.createElement('span');
    element.setAttribute('id', element_id);
    element.innerHTML = text;
    console.debug(`Set <${this.uuid}> element innerHTML to <${element.innerHTML}>.`);
    return element;
  };

};
