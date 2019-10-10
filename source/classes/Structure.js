const Thing = require('../classes/Thing.js');


class Structure extends Thing {
  constructor({ uuid = null, name = 'structure' } =
              { uuid: null, name: 'structure' }) {
    super({ uuid, name });

  };

  affectLocalPlace(place) {
    console.info(`${place.uuid} is being affected by ${this.uuid}`);
  }

  affectLocalActor(actor) {
    console.info(`${actor.uuid} is being affected by ${this.uuid}`);
  };

};

module.exports = Structure;
