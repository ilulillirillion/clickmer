// vim: set ft=javascript:

import KeyboardControllableMixin from './KeyboardControllableMixin.js';

/**
 * Client-Server objects are managed by both the client and the server.
 * The client can modify attributes of the client-server object that request
 * authoritative behavior from the server. The server can overwrite properties
 * of the client unilaterally, and should always trump the client in any
 * dispute over state.
 */
class ClientServerObject extends KeyboardControllableMixin(Object) {
  constructor(
      {
        account_id = null,
        uuid = null,
        name = 'client_object',
        ticks_epoch = 0,
        x = 1,
        y = 1 
      } = 
      {
        account_id: null,
        uuid: null,
        name: 'client_object',
        ticks_epoch: 0,
        x: 1,
        y: 1
      }) {
    console.debug('Constructing a new ServerObject');
    super({ x, y });

    this.class_name == this.constructor.name.toLowerCase();

    this.account_id = account_id;
    this.uuid = uuid;
    this.name = name;
    this.ticks_epoch = ticks_epoch;
    //this.x = x;
    //this.y = y;

    this.x_delta = 0;
    this.y_delta = 0;
    
  }

  get client_x() {
    return this.x + this.x_delta;
  }

  get client_y() {
    return this.y + this.y_delta;
  }

  /**
   *  The update method takes the state from the server and updates relevant
   *  properties on the client object.
   */
  update(update) {
    this.account_id = update.account_id;
    this.uuid = update.uuid;
    this.name = update.name;
    this.ticks_epoch = update.ticks_epoch;
    this.x = update.x;
    this.y = update.y;
  }
    

}

export default ClientServerObject;
