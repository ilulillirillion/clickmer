import DynamicWrappedTextSpan from '../classes/DynamicWrappedTextSpan.js';


export default class HeaderTextSpan extends DynamicWrappedTextSpan {
  constructor(master=null) {
    super();
    console.debug(`Super finished, continuing to instantiate <${this.class_name}> <${this.uuid}>.`);
    
    this.span_contents = '';
    console.debug(`Constructed <${this.class_name}> <${this.uuid}> <${this}>.`);
  };

  tick(text = this.span_contents) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with text <${text}>.`);
    super.tick(text);
  };

}; 
