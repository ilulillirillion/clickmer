// vim: set ft=javascript:


import SocketMixin from '../mixins/SocketMixin.js';


export default class View extends SocketMixin(Object) {
  constructor({ socket_id = null, uuid = null } =
              { socket_id: null, uuid: null }) {
    super({ socket_id });
    this.uuid = uuid;
  };

  update({ socket_id = null, uuid = null } = 
         { socket_id: null, uuid: null }) {

    this.socket_id = socket_id;

    console.info(`Updating with uuid <${uuid}>.`, arguments);
    this.uuid = uuid;
    console.info(this.uuid);
  };

};
