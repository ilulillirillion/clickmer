import WrappedTextSpan from '../classes/WrappedTextSpan.js';


export default class HeaderTextSpan extends WrappedTextSpan {
  constructor(master=null) {
    //console.debug(
        //`Instantating a new HeaderTextSpan with master <${master.uuid || "'(no master)'"}>.`);
    super();
    console.debug(`Super finished, continuing to instantiate <${this.class_name}> <${this.uuid}>.`);
    
    //this.text = 'header text span';
    //this.header_text_span_contents = 'header text span';
    //this.text_span_contents = 'header text span';
    //this.span_contents = 'test2';
    //this.span_contents = 'what';
    this.span_contents = '';
    console.debug(`Constructed <${this.class_name}> <${this.uuid}> <${this}>.`);
    console.warn(this.span_contents);
  };

  tick(text = this.span_contents) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with text <${text}>.`);
    super.tick(text);
  };

  /*
  get effective_text_contents() {
    let text = this.header_text_span_contents;
    if (this.master && this.master.header_text_span_contents) {
      console.debug(`Overriding <${this.uuid}> header text span contents <${this.header_text_span_contents}> with <${this.master.uuid}> header text span contents <${this.master.header_text_span_contents}>.`);
      text = this.master.text_span_contents;
    };
    //return this.master.header_text || this.header_text;
    console.debug(`Returning effective text contents: <${text}>.`);
    return text;
  }
  */

  //tick(master=null, header_text_span_contents = this.header_text_span_contents) {
  /*
  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
    //console.debug(`Ticking <${this.uuid}> with header text span contents <${header_text_span_contents}>.`);
    //this.propogateTickToSuper(master, this.header_text_span_contents);
    //super.tick(null, header_text_span_contents);
    //super.tick(this.header_text_span_contents);
    super.tick();
  };
  */
}; 
