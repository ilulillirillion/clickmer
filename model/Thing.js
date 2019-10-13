const SocketMixin = require('./SocketMixin.js');
const ProxyMixin = require('./ProxyMixin.js');
//const { createUuid: _createUuid } = require('./createUuid.js');
//const createUuid = require('./createUuid.js');


class Thing extends ProxyMixin(SocketMixin(Object)) {
  constructor(
      { socket_id = null, uuid = null, name = 'thing' } =
      { socket_id: null, uuid: null, name: 'thing' }) {
    
    super({ socket_id });

    this.class_name = this.constructor.name.toLowerCase();
    
    this.uuid = uuid ? uuid : this.createUuid();

    this.name = name;

    this.ticks_epoch = 0;

  };

  //tick = require('tickThing.js');
  tick() {
    require('tickThing.js')();
  };

  // FIXME: implement this!
  /*
  write(message) {
    message_log.write(message)
  };
  */

  createUuid() {
    require('./createUuid.js')(this.class_name);
    //_createUuid(this.class_name);
  };

  /*
  createUuid(
      { class_name = this.class_name } =
      { class_name: this.class_name }) {
    // TODO: an either monad should go here...?
    return (class_name) ? `${class_name}_${uuidv6()}` : `error_${uuidv6{}}`;
  };
  */
};


module.exports = Thing;
