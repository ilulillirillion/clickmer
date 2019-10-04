import Thing from '../classes/Thing.js';
import ActorCharacteristic from '../classes/ActorCharacteristic.js';


export default class ActorCharacteristics extends Thing {
  /*
  static characteristics = [
    'vitality'
  ];
  */

  static characteristics = { 'vitality': 1, 'strength': 1 };
    

  constructor(
      { actor: actor, characteristics = {} } = 
      { actor: actor, characteristics: {}}) {
    super({ actor: actor });

    //let characteristics_overrides = characteristics;
    characteristics = Object.assign(
        {}, ActorCharacteristics.characteristics, characteristics);

    this.all = [];
    //for (let characteristic_name of ActorCharacteristics.characteristics) {
    for (let [characteristic_name, characteristic_value] of Object.entries(characteristics)) {
      let characteristic = new ActorCharacteristic({ name: characteristic_name, value: characteristic_value, actor: actor });
      this[characteristic_name] = characteristic;
      this.all.push(characteristic);
    };
  };
};
