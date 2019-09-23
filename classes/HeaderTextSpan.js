import TextSpan from '../classes/TextSpan.js';


export default class HeaderTextSpan extends TextSpan {
  constructor(master=null) {
    //console.debug(
        //`Instantating a new HeaderTextSpan with master <${master.uuid || "'(no master)'"}>.`);
    super();
    console.debug(`Super finished, continuing to instantiate <${this.class_name}> <${this.uuid}>.`);
    
    //this.text = 'header text span';
    this.header_text_span_contents = 'header text span';
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

  tick(master=null, header_text_span_contents = this.header_text_span_contents) {
    console.debug(`Ticking <${this.uuid}> with header text span contents <${header_text_span_contents}>.`);
    //this.propogateTickToSuper(master, this.header_text_span_contents);
    super.tick(null, header_text_span_contents);
    //super.tick(this.header_text_span_contents);
  };
}; 
