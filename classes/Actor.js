import Thing from '../classes/Thing.js';
import ActorStatistic from '../classes/ActorStatistic.js';
import ActorSkill from '../classes/ActorSkill.js';


export default class Actor extends Thing {

  constructor(
      { uuid = null, name = 'actor', message_log = null, sex = null } =
      { uuid:  null, name:  'actor', message_log:  null, sex:  null }) {

    super({ uuid: uuid, name: name, message_log: message_log });

    this.name = name;
    if (!this.name || this.name === 'actor') {
      //this.name = this.generateRandomName();
      this.name = 'test';
    };

    this.sex = sex;
    if (!this.sex) {
      //this.sex = this.getRandomSex();
      this.sex = 'male';
    };

    this.ActorStatistic = ActorStatistic;
    this.ActorStatistic.prototype.owner = this;
    this.ActorSkill = ActorSkill;
    this.ActorSkill.prototype.owner = this;
    //this.ActorCharacteristic = ActorCharacteristic;
    //this.ActorCharacteristic.prototype.owner = this;

    let self = this;
    
    let characteristics = {};
    characteristics.vitality = new this.ActorSkill(
        { name: 'vitality', current: 10 });
    this.characteristics = characteristics;

    let statistics = {};
    statistics.health = new this.ActorStatistic({ name: 'health' });
    Object.defineProperty(statistics.health, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    statistics.hunger = new this.ActorStatistic({ name: 'hunger' });
    Object.defineProperty(statistics.hunger, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    statistics.stamina = new this.ActorStatistic({ name: 'stamina' });
    Object.defineProperty(statistics.stamina, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    this.statistics = statistics;
    this.fill_statistics();


    //this.statistics.health = new this.ActorStatistic({ name: 'health' });
    //this.statistics.hunger = new this.ActorStatistic({ name: 'hunger' });
    //this.statistics.stamina = new this.ActorStatistic({ name: 'stamina' });

  };

  tick() {
    super.tick();
    //this.statistics.hunger.current -= 1;
  }; 

  fill_statistics() {
    //this.statistics.forEach(function (statistic) {
    for (let statistic of Object.values(this.statistics)) {
      statistic.fill();
    };
  }; 

};
