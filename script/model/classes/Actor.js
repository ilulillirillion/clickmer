import Thing from '../classes/Thing.js';
import ThingTypeMixin from '../mixins/ThingTypeMixin.js';
import ActorStatistic from '../classes/ActorStatistic.js';
import ActorProficiency from '../classes/ActorProficiency.js';
import ActorTask from '../classes/ActorTask.js';
import available_names from '../objects/names.js';


export default class Actor extends ThingTypeMixin(Thing) {

  static sexes = [ 'male', 'female' ];

  /*
      { uuid = null, name = 'actor', sex = null,
        characteristics = [
          { name: 'vitality' }
        ],
        statistics = [
          { name: 'health',
            maximum: function() {
              let vitality = this.
      } } =
  */

  /*
  constructor(
      { uuid = null, name = 'actor', sex = null,
        characteristics = [
          { name: 'vitality' }
        ] } =
      { uuid:  null, name:  'actor', sex:  null,
        characteristics: [
          { name: 'vitality' }
        ] }) {
  */

  constructor(
      { uuid = null, name = 'actor', sex = null } =
      { uuid:  null, name:  'actor', sex:  null }) {

    super({ thing_type: 'actor', uuid: uuid, name: name, 
            message_log: message_log });

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

    /*
    let characteristics = {
      vitality: { minimum: 1, maximum: 100, current: 1 }
    };

    let statistics = {
      health: { minimum: 0, maximum: 
    */


    let characteristics = {};
    //characteristics.vitality = new this.ActorCharacteristic(
    //characteristics.vitality = new CharacteristicComponent(
    //characteristics.vitality = new ActorStatistic(
    characteristics.vitality = new ActorProficiency(
        { name: 'vitality', minimum: 1, current: 10 });
    this.characteristics = characteristics;

    let statistics = {};
    statistics.health = new ActorStatistic({ name: 'health' });
    //statistics.health = new StatisticComponent(
    //statistics.health = new StatisticComponent(
    //    { owner: this, name: 'health' });
    Object.defineProperty(statistics.health, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    statistics.hunger = new ActorStatistic({ name: 'hunger' });
    //statistics.hunger = new StatisticComponent(
    //    { owner: this, name: 'hunger' });
    Object.defineProperty(statistics.hunger, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    statistics.stamina = new ActorStatistic({ name: 'stamina' });
    //statistics.stamina = new StatisticComponent(
    //    { owner: this, name: 'stamina' });
    Object.defineProperty(statistics.stamina, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    this.statistics = statistics;
    this.fill_statistics();

    //this.task = new TaskComponent(
    //    { owner: this, name: 'idle', simple_present_name: 'idling' });
    this.task = new ActorTask(
        { name: 'idle', simple_present_name: 'idling' });

  };

  tick() {
    super.tick();
    //this.task.tick();
    //this.statistics.hunger.current -= 1;
    this.task.apply_tick_effects({ participant: this });
  }; 

  fill_statistics() {
    for (let statistic of Object.values(this.statistics)) {
      statistic.fill();
    };
  }; 

  getProficiency(proficiency_name) {
    if (proficiency_name in this.characteristics) {
      let proficiency = this.characteristics[proficiency];
    } else {
      let proficiency_name = this.skills[proficiency];
    };
    return proficiency;
  };

  gainExperience(proficiency_name, experience_gain) {
    proficiency = this.getProficiency(proficiency_name);
    proficiency._experience += experience_gain;
    while (proficiency._experience >= profiency._experience_to_next_level) {
      this.levelUp(proficiency);
    };
  };
  
  levelUp(proficiency_name) {
    let proficiency = this.getProficiency(proficiency_name);
    let experience_requirements_gain = Math.ceil((
        proficiency._experience_to_next_level + 
        (proficiency._experience_to_next_level * 0.10)
    ));
    proficiency._experience_to_next_level = experience_requirements_gain;
    proficiency.current += 1;
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
