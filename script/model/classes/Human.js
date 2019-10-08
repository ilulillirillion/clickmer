// vim: set ft=javascript


import Actor from '../classes/Actor.js';


export default class Human extends Actor {
  constructor({ uuid = null, name = 'human', sex = null } =
              { uuid: null, name: 'human', sex: null }) {
    super({ uuid, name, sex });

    this.characteristics.vitality.current = 10

  };
};
