// vim: set ft=javascript:


const SocketMixin = Base => class extends Base {
  
  constructor({ socket_id = null } = { socket_id: null }, ...args) {
    super(...args);
    this.socket_id = socket_id;
  };

};


module.exports = SocketMixin;
