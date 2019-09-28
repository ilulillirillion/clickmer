import TextSpan from '../classes/WrappedTextSpan.js';
import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedButton extends WrappedElement {
  constructor() {
    console.debug('Instantiating a new WrappedButton.');
    super('button');
    console.debug(`Instantiating a new <${this.class_name}> <${this.uuid}>.`);


    this.text = 'a button';
    this.text_span = new TextSpan(this);
  };

};
