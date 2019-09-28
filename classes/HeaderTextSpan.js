import WrappedTextSpan from '../classes/WrappedTextSpan.js';


export default class HeaderTextSpan extends WrappedTextSpan {
  constructor(master=null) {
    super();
    console.debug(`Super finished, continuing to instantiate <${this.class_name}> <${this.uuid}>.`);
    
    this.span_contents = '';
    console.debug(`Constructed <${this.class_name}> <${this.uuid}> <${this}>.`);
    console.warn(this.span_contents);
  };

  tick(text = this.span_contents) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with text <${text}>.`);
    super.tick(text);
  };

}; 
