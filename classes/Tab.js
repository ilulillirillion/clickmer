import Pane from '../classes/Pane.js';


export default class Tab extends Pane {
  constructor(name=null) {
    console.debug(`Creating tab with name: <${name}>.`);
    super();

    // Name
    this.name = name;
    if (this.name == null) {
      this.name = 'tab'
    };
    console.debug(`Set tab name to <${this.name}>.`);

    this.element.classList.add('tab');

    this.header_span_contents = 'A tab.';
    console.debug(`<${this.uuid}> header text span contents set to <${this.header_span_contents}>.`);

    this.navigation_button = null;

    this.element.style.display = 'none';

  };

  hide() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    this.element.style.display = 'none';
  };

  show() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    this.element.style.display = 'inline-block';
  };

};
