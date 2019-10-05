import Thing from '../classes/Thing.js';


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

    //this.ActorStatistic = ActorStatistic;
    //this.ActorStatistic.prototype.owner = this;

    let statistics = {};
    this.statistics.health = new ActorStatistic({ name: 'health' });
    this.statistics.hunger = new ActorStatistic({ name: 'hunger' });
    this.statistics.stamina = new ActorStatistic({ name: 'stamina' });


    //this.statistics.health = new this.ActorStatistic({ name: 'health' });
    //this.statistics.hunger = new this.ActorStatistic({ name: 'hunger' });
    //this.statistics.stamina = new this.ActorStatistic({ name: 'stamina' });

  };

  tick() {
    super.tick();
    //this.statistics.hunger.current -= 1;
  }; 

  

};
