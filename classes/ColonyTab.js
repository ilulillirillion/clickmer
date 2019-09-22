import Tab from './Tab.js';

export default class ColonyTab extends Tab {
  constructor() {
    super(name = 'colony');
    console.debug('Creating colony tab.');

    this.header_text = 'Colony Tab!';
    //this.dom.header_text = this.createHeaderTextElement();
  };

  /*
  createHeaderTextElement(text=this.header_text) {
    console.debug(`Creating header text element for <${this.uuid}>.`);
    let header_text = document.createElement('text_span');
    let header_text_id = `${this.uuid}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.innerHTML = text;
  };
  */
    
};
