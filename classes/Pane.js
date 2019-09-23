//import { DomMixin } from '../mixins/DomMixin.js'
//import Thing from '../classes/Thing.js'
import WrappedElement from '../classes/WrappedElement.js';
import HeaderTextSpan from '../classes/HeaderTextSpan.js';


//export default class Pane extends DomMixin(Thing) {
export default class Pane extends WrappedElement {
  //static default_args = { 'name': '' };
  //constructor(args = Pane.default_args) {
  //constructor({ name = '', header_text_span_contents = '' }) {
  //constructor(name = '', header_text_span_contents = '') {
  //constructor(header_text_span_contents = '') {
  constructor() {
    //super(args);
    super();
    //console.debug(`Instantiating <${name}> Pane <${this.uuid}>.`);
    //let default_args = Pane.default_args;

    /*
    // Name.
    this.name = args.name;
    let default_name = default_args.name;
    if (!this.name) {
      console.debug(`Empty or invalid name <${this.name}> given for <${this.uuid}>, using default name <${default_name}>.`);
      this.name = default_name;
    };
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);
    */


    // Header text.
    //this.header_text_span_contents = args.header_text_span_contents;
    //this.header_text_span_contents = header_text_span_contents;
    this.header_text_span_contents = 'A pane';
    console.debug(`<${this.uuid}> header text set to <${this.header_text_span_contents}>.`);
    /*
    if (!this.header_text_span_) {
      let default_header_text = default_args.header_text || default_args.name;
      console.debug(`Empty of invalid header text <${this.header_text}> given for <${this.uuid}>, using default header text <${default_header_text}>.`);
      this.header_text = default_header_text;
    };
    */

    this.element = this.createDomElement();


    /*
    this.dom = [
      {
        'name': 'pane',
        'element': this.createPaneElement(),
        'children': [
          {
            'name': 'header_text',
            'element': this.createPaneHeaderTextElement(),
            'children': null
          }
        ]
      }
    ];
    console.debug(`<${this.uuid}> dom set to <${this.dom}>.`);
    */

    /*
    // Pane element.
    let pane_name = `${this.name_plus_underscore}pane`;
    //this.dom[pane_name] = this.createPaneElement(this.name);
    this.dom[pane_name] = this.createPaneElement();
    // Main pane alias.
    this.dom.main_pane = this.dom[pane_name];
    console.debug(`<${this.uuid}> main pane set to <${this.dom[pane_name]}>.`); 

    // Pane header text element.
    let header_text_name = `${pane_name}_header_text`;
    this.dom[header_text_name] = this.createPaneHeaderTextElement(this.name, this.header_text, this.uuid);
    this.dom[pane_name].appendChild(this.dom[header_text_name]);
    // Main pane text header alias.
    this.dom.main_pane_header_text = this.dom[header_text_name];
    console.debug(`<${this.uuid}> <${header_text_name}> set to <${this.dom[header_text_name]}>.`);
    */

    this.header_text_span = new HeaderTextSpan();
    this.element.appendChild(this.header_text_span.element);
    console.debug(`<${this.uuid}> header text span set to <${this.header_text_span}>.`);

  };

  
  // If there is a name, attach an underscore to it, otherwise leave it blank.
  get name_plus_underscore() {
    let name_plus_underscore = this.name;
    if (name) { name_plus_underscore = `${name}_` };
    return name_plus_underscore;
  };

  
  tick(master=null, header_text_span_contents = this.header_text_span_contents) {
    console.debug(`Ticking pane <${this.uuid}> with header text span contents <${header_text_span_contents}>.`);
    //this.propogateTickToSuper(master);
    super.tick();
    // Tick header text
    //this.header_text.text(this);
    this.header_text_span.tick(null, header_text_span_contents);
  };
    


  createDomElement(args = { 'name': this.name, 'uuid': this.uuid } ) {
    let pane = document.createElement('div');
    let pane_id = `${args.uuid}_${args.name}_pane`;
    pane.setAttribute('id', pane_id);
    pane.classList.add('pane');
    pane.classList.add(`${args.name}_pane`);
    return pane;
  };


  /*
  //createPaneElement(name = this.name, uuid = this.uuid) {    
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
  */

};
