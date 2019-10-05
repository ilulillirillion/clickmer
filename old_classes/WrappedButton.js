import WrappedTextSpan from '../classes/WrappedTextSpan.js';
import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedButton extends WrappedElement {
  constructor(text) {
    console.debug('Instantiating a new WrappedButton.');
    super('button');
    console.debug(`Instantiating a new <${this.class_name}> <${this.uuid}>.`);


    text = text || 'a button';
    let text_span = new WrappedTextSpan(text);
    this.element.appendChild(text_span.element);
    this.text_span = text_span;
  };

};
