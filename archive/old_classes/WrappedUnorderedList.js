import WrappedElement from '../classes/WrappedElement.js';


export default class WrappedUnorderedList extends WrappedElement {
  constructor() {
    console.debug('Constructing a new WrappedUnorderedList.');
    super('ul');
    console.debug(`Constructing a <${this.class_name}>: <${this.uuid}>.`);

    this.list_contents = [];
  };

  tick(list_contents = this.list_contents) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with 'list_contents': <${list_contents}>.`);
    super.tick();
    while( this.element.firstChild ){
      this.element.removeChild( this.element.firstChild );
    };
    for (let list_content of list_contents) {
      let list_element = document.createElement('li');
      list_element.innerHTML = list_content;
      this.element.appendChild(list_element);
    };
  };
};
