// vim: set ft=javascript:


import SocketMixin from '../mixins/SocketMixin.js';


export default class View extends SocketMixin(Object) {
  constructor({ socket_id = null, uuid = null, name = null } =
              { socket_id: null, uuid: null, name: null }) {
    super({ socket_id });
    this.uuid = uuid;
    this.name = name;
  };

  update({ socket_id = null, uuid = null, name = null } = 
         { socket_id: null, uuid: null, name: null }) {

    this.socket_id = socket_id;
    this.name = name;

    console.info(`Updating with uuid <${uuid}>.`, arguments);
    this.uuid = uuid;
    console.info(this.uuid);
  };

};
