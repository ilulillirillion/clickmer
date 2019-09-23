import TextSpan from '../classes/WrappedTextSpan.js';
import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedButton extends WrappedElement {
  constructor() {
    console.debug('Instantiating a new WrappedButton.');
    super('button');
    console.debug(`Instantiating a new <${this.class_name}> <${this.uuid}>.`);

    //this.element = this.createDomElement();

    this.text = 'a button';
    this.text_span = new TextSpan(this);
  };

  /*
  tick(master=null) {
    console.debug(`Ticking <${this.uuid}>.`);
    this.propogateTickToSuper(master);
  };
  */

  /*
  createDomElement(element_id = this.uuid) {
    let element = document.createElement('button');
    element.setAttribute('id', element_id);
    return element;
  };
  */

};
