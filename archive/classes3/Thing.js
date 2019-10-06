import ProxyMixin from '../mixins/ProxyMixin.js';
import uuidv6 from '../functions/uuidv6.js';
import dedent from '../template_tags/dedent.js';


/**
 * Thing class is used to set UUID, name, and ticks epoch.
 * Also enables convenient logging, and facilitates ProxyMixin wrapper.
 */
export default class Thing extends ProxyMixin(Object) {
  constructor(
      { uuid = null, name = 'thing', message_log = null } = 
      { uuid:  null, name:  'thing', message_log:  null }) {
    super();


    this.class_name = this.constructor.name.toLowerCase();


    // UUID.
    this.uuid = uuid;
    if (!this.uuid) {
      this.uuid = this.uuid = this.createUUID();
    };


    this.name = name;     // Name.
    this.ticks_epoch = 0; // Ticks epoch.

    /*
    // Message log.
    this.message_log = message_log;
    if (!this.message_log) {
      console.warn(dedent`
          <${this.uuid}> does not have a message_log 
          (<${this.message_log}>).`
      );
    };
    */

  };


  /**
   * The only reason to tick Thing directly is convenient logging.
   */
  tick() {
    console.debug(`Ticking <${this.uuid}>`, this);
    this.ticks_epoch += 1;
  };


  /**
   * Will write a message to message log so long as message log exists.
   */
  write(message) {
    message_log.write(message)
  };

    //if (this.message_log) {
    //  message_log.write(message);
    //};
  //};


  createUUID() {
    let uuid = `${this.class_name}_${uuidv6()}`;
    return uuid;
  };
    

};
