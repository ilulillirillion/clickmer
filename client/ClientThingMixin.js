// vim: set ft=javascript:

import ClientSocketMixin from './ClientSocketMixin.js';
import ClientProxyMixin from './ClientProxyMixin.js';

//export default class ClientThing extends ClientProxyMixin(ClientSocketMixin(Object)) {

const ClientThingMixin = Base => class extends ClientProxyMixin(ClientSocketMixin(Object)) {
  constructor(
      { socket_id = null, uuid = null, name = 'thing' } =
      { socket_id: null, uuid: null, name: 'thing' }) {
    
    //super({ socket_id });
    super(...args);

    this.class_name = this.constructor.name.toLowerCase();
    
    this.uuid = uuid;
    //this.uuid = uuid;
    //this.uuid = (uuid) ? uuid : this.createUuid();
    //this.uuid = this.createUuid();

    this.name = name;

    this.ticks_epoch = 0;

    this.fill_style = 'rgba(0, 0, 255, 0.6)';

  };

  //tick = require('tickThing.js');
  //tick() {
  //  require('./tickThing.js')(this);
  //};

  // FIXME: implement this!
  /*
  write(message) {
    message_log.write(message)
  };
  */

  /*
  setUuid(uuid) {
    this.uuid = uuid;
  };
  */

  /*
  createUuid() {
    const uuid = require('./createUuid.js')(this.class_name);
    //either(logger.error(uuid), this.setUuid(uuid), uuid);
    let self = this;
    either(uuid,
        function() { logger.error(uuid) },
        function() { self.uuid = uuid }
    );
    //either(logger.error(uuid), , uuid);
    //_createUuid(this.class_name);
  };
  */

  /*
  createUuid() {
    const uuid = require('./createUuid.js')(this.class_name);
    return uuid;
  };
  */
    

  /*
  createUuid(
      { class_name = this.class_name } =
      { class_name: this.class_name }) {
    // TODO: an either monad should go here...?
    return (class_name) ? `${class_name}_${uuidv6()}` : `error_${uuidv6{}}`;
  };
  */
};
