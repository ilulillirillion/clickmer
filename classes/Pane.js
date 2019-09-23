//import { DomMixin } from '../mixins/DomMixin.js'
//import Thing from '../classes/Thing.js'
import { DomTooltipMixin } from '../mixins/DomTooltipMixin.js';
import WrappedElement from '../classes/WrappedElement.js';
import HeaderTextSpan from '../classes/HeaderTextSpan.js';


//export default class Pane extends DomMixin(Thing) {
//export default class Pane extends DomTooltipMixin(WrappedElement) {
export default class Pane extends DomTooltipMixin(WrappedElement) {
  //static default_args = { 'name': '' };
  //constructor(args = Pane.default_args) {
  //constructor({ name = '', header_text_span_contents = '' }) {
  //constructor(name = '', header_text_span_contents = '') {
  //constructor(header_text_span_contents = '') {
  constructor() {
    super();
    //super(args);

    //let element = this.createDomElement();
    //super(element);
    //this.element = element;


    /*
    let pane = document.createElement('div');
    let pane_id = `${args.uuid}_${args.name}_pane`;
    pane.setAttribute('id', pane_id);
    pane.classList.add('pane');
    pane.classList.add(`${args.name}_pane`);
    return pane;
    */

    this.element.classList.add('pane');

    console.debug(`<${this.uuid}> element set to <${this.element}>.`);
    //console.debug(`Instantiating <${name}> Pane <${this.uuid}>.`);
    //let default_args = Pane.default_args;

    this.tooltip_span_contents = '';
    this.header_span_contents = '';

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
    //this.header_text_span_contents = 'A pane';
    //this.header_text_span_contents = '';
    //console.debug(`<${this.uuid}> header text set to <${this.header_text_span_contents}>.`);
    /*
    if (!this.header_text_span_) {
      let default_header_text = default_args.header_text || default_args.name;
      console.debug(`Empty of invalid header text <${this.header_text}> given for <${this.uuid}>, using default header text <${default_header_text}>.`);
      this.header_text = default_header_text;
    };
    */

    //this.element = this.createDomElement();


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

    this.header_text_span_contents = '';

    this.header_text_span = new HeaderTextSpan();
    this.element.appendChild(this.header_text_span.element);
    console.debug(`<${this.uuid}> header text span set to <${this.header_text_span}>.`);

    /*
    let self = this;
    let update_tooltip_span_tick_listener = function() {
      this.tooltip.tick();
    };
    this.tick_listeners.push(update_tooltip_span_tick_listener);
    */

    let self = this;
    let update_header_span_tick_listener = function() {
      if (self.header_span_contents) {
        self.header_text_span.span_contents = self.header_span_contents;
      };
      self.header_text_span.tick();
    };
    this.tick_listeners.push(update_header_span_tick_listener);

  };

  
  // If there is a name, attach an underscore to it, otherwise leave it blank.
  get name_plus_underscore() {
    let name_plus_underscore = this.name;
    if (name) { name_plus_underscore = `${name}_` };
    return name_plus_underscore;
  };

  /*
  static _updateTooltipSpanTick(tooltip) {
    tooltip.tick();
  };
  */
  
  //tick(master=null, header_text_span_contents = this.header_text_span_contents) {
  /*
  tick() {
    console.debug(`Ticking pane <${this.uuid}.`);
    //console.debug(`Ticking pane <${this.uuid}> with header text span contents <${header_text_span_contents}>.`);
    //this.propogateTickToSuper(master);
    super.tick();
    // Tick header text
    //this.header_text.text(this);
    //this.header_text_span.text_span_contents = this.header_text_span_contents;
    //this.header_text_span.tick(null, header_text_span_contents);
    //this.header_text_span.tick();
    this.tickHeaderTextSpan();
    //this.tickTooltipSpan();
    //let tooltip_tick_args = { 'span_contents': this.text_span_contents }
    console.warn(this.tooltip_span_contents);
    let tooltip_tick_args = { 'span_contents': this.tooltip_span_contents }
    this.tooltip.tick(tooltip_tick_args);
  };
  */
    


  createDomElement(args = { 'name': this.name, 'uuid': this.uuid } ) {
    let pane = document.createElement('div');
    let pane_id = `${args.uuid}_${args.name}_pane`;
    pane.setAttribute('id', pane_id);
    pane.classList.add('pane');
    pane.classList.add(`${args.name}_pane`);
    return pane;
  };

  
  /*
  tickTooltip() {
    let new_span_contents = this.tooltip_span_contents;
    console.debug(`Updating <${this.uuid}> <${this.tooltip}> span contents <${this.tooltip.span_contents}> to <${new_span_contents}>.`);
    this.tooltip_span_contents;
  */
    


  tickHeaderTextSpan() {
    let new_text_span_contents = this.header_text_span_contents;
    console.debug(`Updating <${this.uuid}> <${this.header_text_span.uuid}> header text span contents <${this.header_text_span.text_span_contents}> to <${new_text_span_contents}>`);
    //this.header_text_span.text_span_contents = this.header_text_span_contents;
    this.header_text_span.text_span_contents = new_text_span_contents;
    (`<${this.uuid}>'s <${this.header_text_span.uuid}> text span contents set to <${this.header_text_span.text_span_contents}>.`);
    this.header_text_span.tick();
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
