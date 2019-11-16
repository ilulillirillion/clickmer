// vim: set ft=javascript:

//const CanWinstonLog = require('../library/nodejs/CanWinstonLog.js');
//const CanWinstonLog = require('@lib/CanWinstonLog.js');
//const CanWinstonLog = require('library/CanWinstonLog.js');
const { CanWinstonLog } = require('nodejslib');

class Thing extends CanWinstonLog(Object) {
  constructor(
      { uuid = null, name = null, ticks_epoch = 0, socket_id = null } = 
      { uuid: null, name: null, ticks_epoch: 0, socket_id: null }, 
      ...args) {
    super(...args);

    // Provide all things with a class_name property, built from the name
    // of the class itself. This should not be relied upon, but normally will
    // point the parent when inheritance is used.
    this.class_name = this.constructor.name.toLowerCase();

    // All things should have a UUID. If this is no UUID, create one using the
    // createUUID method.
    this.uuid = uuid;
    if (!this.uuid) {
      this.uuid = this.createUuid();
    }

    this.fill_style = 'rgba(0, 0, 255, 0.6)';

    this.ticks_epoch = ticks_epoch;

    this.socket_id = socket_id;
      
  }

  tick() {
    this.ticks_epoch += 1;
  }

  createUuid() {
    const uuid = require('./createUuid.js')(this.class_name);
    return uuid;
  }

}



module.exports = Thing;
