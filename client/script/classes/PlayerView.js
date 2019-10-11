// vim: set ft=javascript:


//const View = require('../classes/View.js');
import View from '../classes/View.js';


export default class PlayerView extends View {

  constructor({ socket_id = null, uuid = null } =
              { socket_id: null, uuid: null }) {
    console.info('Constructing PlayerView', arguments);
    super({ socket_id, uuid });

    console.info('Constructed PlayerView', this);

  };

};
