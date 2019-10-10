// vim: set ft=javascript:


//const View = require('../classes/View.js');
import View from '../classes/View.js';


export default class PlayerView extends View {

  constructor({ socket_id = null, uuid = null } =
              { socket_id: null, uuid: null }) {
    super({ socket_id, uuid });

  };

};
