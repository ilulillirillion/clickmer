//import { DomTooltipMixin } from '../mixins/DomTooltipMixin.js';
import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedTextSpan extends WrappedElement {
//export default class WrappedTextSpan extends DomTooltipMixin(WrappedElement) {
  constructor(master=null) {
    console.debug('Instantiating a new TextSpan.');

    super('span')
    //let element = this.createDomElement();
    //super(element);

    console.debug(`Instantiating a new <${this.class_name}> <${this.uuid}>.`);

    //this.text_span_contents = 'text span';
    this.span_contents = '';
    console.debug(`<${this.uuid}> span contents set to <${this.span_contents}>.`);

    //this.element = this.createDomElement();
    //let element = document.createElement('span');
    //let element_id = this.uuid;
    //element.setAttribute('id', element_id);
    this.element.innerHTML = this.span_contents;
    console.debug(`Set <${this.uuid}> element innerHTML to <${this.element.innerHTML}>.`);
    //return element;

    /*
    let self = this;
    let update_span_contents_tick_listener = function() {
      //console.warn(self.span_contents);
      let new_contents = self.span_contents;
      console.debug(`Updating <${self.uuid}> element innerHTML (<${self.element.innerHTML}>) to <${new_contents}>.`);
      self.element.innerHTML = self.span_contents;
      console.debug(`<${self.uuid}> element innerHTML set to <${self.element.innerHTML}>.`);
    };
    this.tick_listeners.push(update_span_contents_tick_listener);
    //this.tick_listeners.push(_updateSpanContents(this.element, this.span_contents));
    */

  };

  tick(text = this.span_contents) {
    
    //console.warn(this.span_contents);
    //this.element.innerHTML = this.span_contents;
    this.element.innerHTML = text;
  };

  /*
  get effective_text_contents() {
    //console.warn(this.uuid);
    //console.warn(this.master);
    //console.warn(this.text_span_contents);
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
  */

  /*
  static _updateSpanContents(element, text) {
    //self.element.innerHTML = self.text_span_contents;
    element.innerHTML = text;
  }:
  */

  //tick(master=null, text_span_contents = this.text_span_contents) {
  //tick(overrides={}) {
  //tick() {
    //console.debug(`Ticking TextSpan <${this.uuid}> with text span contents <${text_span_contents}>.`);
    //this.propogateTickToSuper(master);
    //super.tick(overrides);
    //this.element.innerHTML = this.effective_text;
    //console.debug(`Set <${this.uuid}> innerHTML to <${this.element.innerHTML}>.`)
  //  this.element.innerHTML = this.text_span_contents;
    //this.element.innerHTML = text_span_contents;
  //  console.debug(`Set <${this.uuid}> innerHTML to <${this.element.innerHTML}>.`)
  //};

  //createDomElement({ element_id = this.uuid, text = this.text }) {
  //createDomElement(element_id = this.uuid, text = this.effective_text_contents) {

  /*
  createDomElement() {
    let element = document.createElement('span');
    let element_id = this.uuid;
    element.setAttribute('id', element_id);
    element.innerHTML = this.span_contents;
    console.debug(`Set <${this.uuid}> element innerHTML to <${element.innerHTML}>.`);
    return element;
  };
  */

};
