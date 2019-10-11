// vim: set ft=javascript:


const Thing = require('../classes/Thing.js');


class SimpleStorage extends Thing {
  constructor({ uuid = null, name = null } =
              { uuid: null, name: null }) {

    super({ uuid, name });

    this.game_state = {};

  };
};    
