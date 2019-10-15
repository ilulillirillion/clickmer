const SocketMixin = require('./SocketMixin.js');
const ProxyMixin = require('./ProxyMixin.js');
const { either } = require('./eitherMonad.js');
//const { createUuid: _createUuid } = require('./createUuid.js');
//const createUuid = require('./createUuid.js');


class Thing extends ProxyMixin(SocketMixin(Object)) {
  constructor(
      { socket_id = null, uuid = null, name = 'thing' } =
      { socket_id: null, uuid: null, name: 'thing' }) {
    
    super({ socket_id });

    this.class_name = this.constructor.name.toLowerCase();
    
    //this.uuid = uuid;
    this.uuid = (uuid) ? uuid : this.createUuid();
    //this.uuid = this.createUuid();

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

  createUuid() {
    const uuid = require('./createUuid.js')(this.class_name);
    return uuid;
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
