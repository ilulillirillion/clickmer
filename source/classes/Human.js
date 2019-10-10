// vim: set ft=javascript


const Actor = require('../classes/Actor.js');


class Human extends Actor {
  constructor({ uuid = null, name = 'human', sex = null } =
              { uuid: null, name: 'human', sex: null }) {
    super({ uuid, name, sex });

    this.characteristics.vitality.current = 10

  };
};


module.exports = Actor;
