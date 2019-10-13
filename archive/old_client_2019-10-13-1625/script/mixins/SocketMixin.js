// vim: set ft=javascript:


const SocketMixin = Base => class extends Base {
  
  constructor({ socket_id = null } = { socket_id: null }) {
    super();
    this.socket_id = socket_id;
  };

};


export default SocketMixin;
