const logger = require('../misc/winston_logger.js');
const ProxyMixin = require('../mixins/ProxyMixin.js');
const SocketMixin = require('../mixins/SocketMixin.js');
const uuidv6 = require('../functions/uuidv6.js');
const dedent = require('../template_tags/dedent.js');


/**
 * Thing class is used to set UUID, name, and ticks epoch.
 * Also enables convenient logging, and facilitates ProxyMixin wrapper.
 */
class Thing extends ProxyMixin(SocketMixin(Object)) {
//class Thing extends SocketMixin(ProxyMixin(Object)) {
  constructor(
      { socket_id = null, uuid = null, name = 'thing', message_log = null } = 
      { socket_id: null, uuid:  null, name:  'thing', message_log:  null }) {
    super({ socket_id });


    this.class_name = this.constructor.name.toLowerCase();

    this.thing_type = 'thing';

    // UUID.
    this.uuid = uuid;
    if (!this.uuid) {
      this.uuid = this.uuid = this.createUUID();
    };


    this.name = name;     // Name.
    this.ticks_epoch = 0; // Ticks epoch.

    logger.debug(`Constructed <${this.uuid}>.`);

  };


  /**
   * The only reason to tick Thing directly is convenient logging and
   * tick epoch update.
   */
  tick() {
    //console.debug(`Ticking <${this.uuid}>`, this);
    this.ticks_epoch += 1;
  };


  /**
   * Will write a message to message log so long as message log exists.
   */
  write(message) {
    message_log.write(message)
  };


  createUUID() {
    let uuid = `${this.class_name}_${uuidv6()}`;
    return uuid;
  };
    

};

module.exports = Thing;
