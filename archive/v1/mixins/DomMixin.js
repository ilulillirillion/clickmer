export const DomMixin = Base => class extends Base {
  constructor() {
    super();
    console.debug('Executing DomMixin constructor.');

    this.dom = {};
  }

  createPaneElement(args = { 'name': this.name, 'uuid': this.uuid } ) {
    let pane = document.createElement('div');
    let pane_id = `${args.uuid}_${args.name}_pane`;
    pane.setAttribute('id', pane_id);
    pane.classList.add('pane');
    pane.classList.add(`${args.name}_pane`);
    return pane;
  };

  createPaneHeaderTextElement(
      name = this.name, uuid = this.uuid, text = this.header_text) {
    let header_text = document.createElement('span');
    let header_text_id = `${uuid}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.classList.add('header_text');
    header_text.classList.add(`${name}_pane_header_text`);
    header_text.innerHTML = text;
    return header_text;
  };

};
