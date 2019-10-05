import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedTextSpan extends WrappedElement {
  constructor(span_contents) {
    console.debug('Instantiating a new TextSpan.');

    super('span')

    console.debug(`Instantiating a new <${this.class_name}> <${this.uuid}>.`);

    this.span_contents = span_contents || '';
    console.debug(`<${this.uuid}> span contents set to <${this.span_contents}>.`);

    this.element.innerHTML = this.span_contents;
    console.debug(`Set <${this.uuid}> element innerHTML to <${this.element.innerHTML}>.`);


  };

};
