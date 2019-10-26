// vim: set ft=javascript:

import KeyboardControllableMixin from './KeyboardControllableMixin.js';

class ServerObject extends KeyboardControllableMixin(Object) {
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
}

export default ServerObject;
