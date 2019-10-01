import Thing from '../classes/Thing.js';
import ActorCharacteristic from '../classes/ActorCharacteristic.js';


export default class ActorCharacteristics extends Thing {
  static characteristics = [
    'vitality'
  ];
  constructor() {
    super();

    this.all = [];
    for (let characteristic_name of ActorCharacteristics.characteristics) {
      let characteristic = new ActorCharacteristic({ name: characteristic_name });
      this[characteristic_name] = characteristic;
      this.all.push(characteristic);
    };
  };
};
