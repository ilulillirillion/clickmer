const Thing = require('../classes/Thing.js');
const Colony = require('../classes/Colony.js');


class Player extends Thing {
  constructor({ uuid = null, name = 'player' } =
              { uuid: null, name: 'player' }) {
    super({ uuid, name });

    this.colony_location = 0;

    this.colony = new Colony();

  };

  tick() {
    console.info(`Player colony`, this.colony);
  };

};

module.exports = Player;
