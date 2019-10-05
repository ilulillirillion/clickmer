import Thing from '../classes/Thing.js';
import StatisticComponent from '../classes/StatisticComponent.js';
import SkillComponent from '../classes/SkillComponent.js';
import CharacteristicComponent from '../classes/CharacteristicComponent.js';
import TaskComponent from '../classes/TaskComponent.js';
import available_names from '../objects/names.js';


export default class Actor extends Thing {

  static sexes = [ 'male', 'female' ];

  constructor(
      { uuid = null, name = 'actor', message_log = null, sex = null } =
      { uuid:  null, name:  'actor', message_log:  null, sex:  null }) {

    super({ uuid: uuid, name: name, message_log: message_log });

    this.sex = sex;
    if (!this.sex) {
      this.sex = this.getRandomSex();
    };

    this.name = name;
    if (!this.name || this.name === 'actor') {
      this.name = this.getRandomName();
    };

    /*
    let ActorStatistic = ActorStatistic;
    let ActorStatistic.prototype.owner = this;
    let ActorSkill = ActorSkill;
    let ActorSkill.prototype.owner = this;
    let ActorCharacteristic = ActorCharacteristic;
    let ActorCharacteristic.prototype.owner = this;
    let ActorTask = ActorTask;
    let ActorTask.prototype.owner = this;
    */

    /*
    this.ActorStatistic = ActorStatistic;
    this.ActorStatistic.prototype.owner = this;
    this.ActorSkill = ActorSkill;
    this.ActorSkill.prototype.owner = this;
    this.ActorCharacteristic = ActorCharacteristic;
    this.ActorCharacteristic.prototype.owner = this;
    this.ActorTask = ActorTask;
    this.ActorTask.prototype.owner = this;
    */

    let self = this;
    
    /*
    let skills = {};
    skills.test = new SkillComponent(
      { owner: this, name: 'skill' });
    this.skills = skills;
    */

    let characteristics = {};
    //characteristics.vitality = new this.ActorCharacteristic(
    characteristics.vitality = new CharacteristicComponent(
        { owner: this, name: 'vitality', current: 10 });
    this.characteristics = characteristics;

    let statistics = {};
    //statistics.health = new this.ActorStatistic({ name: 'health' });
    statistics.health = new StatisticComponent(
        { owner: this, name: 'health' });
    Object.defineProperty(statistics.health, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    //statistics.hunger = new this.ActorStatistic({ name: 'hunger' });
    statistics.hunger = new StatisticComponent(
        { owner: this, name: 'hunger' });
    Object.defineProperty(statistics.hunger, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    //statistics.stamina = new this.ActorStatistic({ name: 'stamina' });
    statistics.stamina = new StatisticComponent(
        { owner: this, name: 'stamina' });
    Object.defineProperty(statistics.stamina, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    this.statistics = statistics;
    this.fill_statistics();

    this.task = new TaskComponent(
        { owner: this, name: 'idle', simple_present_name: 'idling' });

  };

  tick() {
    super.tick();
    this.task.tick();
    //this.statistics.hunger.current -= 1;
  }; 

  fill_statistics() {
    for (let statistic of Object.values(this.statistics)) {
      statistic.fill();
    };
  }; 

  getRandomName() {
    let names = available_names.male_names;
    if (this.sex == 'female') {
      names = available_names.female_names;
    };
    let random_index = Math.floor(Math.random() * names.length);
    return names[random_index];
  };

  getRandomSex() {
    let sexes = Actor.sexes;
    let random_index = Math.floor(Math.random() * sexes.length);
    let sex = sexes[random_index];
    return sex;
  };


};
