const Thing = require('../classes/Thing.js');
const ThingTypeMixin = require('../mixins/ThingTypeMixin');
const ActorStatistic = require('../classes/ActorStatistic.js');
const ActorProficiency = require('../classes/ActorProficiency.js');
const ActorTask = require('../classes/ActorTask.js');
const available_names = require('../misc/names.js');


class Actor extends ThingTypeMixin(Thing) {

  static sexes = [ 'male', 'female' ];


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


    let self = this;
    


    let characteristics = {};
    characteristics.vitality = new ActorProficiency(
        { name: 'vitality', minimum: 1, current: 10 });
    this.characteristics = characteristics;

    let statistics = {};
    statistics.health = new ActorStatistic({ name: 'health' });
    Object.defineProperty(statistics.health, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    statistics.hunger = new ActorStatistic({ name: 'hunger' });
    Object.defineProperty(statistics.hunger, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    statistics.stamina = new ActorStatistic({ name: 'stamina' });
    Object.defineProperty(statistics.stamina, 'maximum', {
      get: function() {
        let vitality = self.characteristics.vitality.current;
        let maximum = vitality * 10;
        return maximum;
      }
    });
    this.statistics = statistics;
    this.fill_statistics();

    this.task = new ActorTask(
        { name: 'idle', simple_present_name: 'idling' });

  };

  tick() {
    super.tick();
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

module.exports = Actor;
