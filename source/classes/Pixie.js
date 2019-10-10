const Actor = require('../classes/Actor.js');


class Pixie extends Actor {

  /*
  constructor() {
    let characteristicis_overrides = [
      { name: 'vitality', current: 1  }
    ];
    super({ characteristics_overrides: characteristics_overrides });
  };
  */

  constructor({ uuid = null, name = 'pixie', sex = null } =
              { uuid: null, name: 'pixie', sex: null }) {
    super({ uuid, name, sex });
    this.characteristics.vitality.current = 1;

    //this.fill_statistics();
  };

};


module.exports = Pixie;
